import express from "express";
import bcrypt from "bcrypt";
import User from "../models/users.js"; // General User schema
import Individual from "../models/indivisual_users.js";
import Kitchen from "../models/Kitchens.js";
import Ngo from "../models/Ngo.js";

const router = express.Router();

// 👉 General Signup Route (Handles Individual, Kitchen, and NGO)
router.post("/signup", async (req, res) => {
  try {
    const { role, userName, password, contact, location, fssaiId, ngoId } = req.body;

    if (!role || !["Individual", "Kitchen", "NGO"].includes(role)) {
      return res.status(400).json({ message: "Invalid role selected" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    let newUser, roleId;

    if (role === "Individual") {
      newUser = new Individual({ userName, password: hashedPassword, contact, location });
    } else if (role === "Kitchen") {
      if (!fssaiId) {
        return res.status(400).json({ message: "FSSAI ID is required for Kitchen users" });
      }
      newUser = new Kitchen({
        userName,
        password: hashedPassword,
        contact,
        location,
        fssaiId,
        ordersServed: 0,
        donationsServed: 0,
        rewards: 0,
      });
    } else if (role === "Ngo") {
      if (!ngoId) {
        return res.status(400).json({ message: "NGO ID is required for NGO users" });
      }
      newUser = new Ngo({
        ngoId,
        password: hashedPassword,
        contact,
        location,
        donationsReceived: 0,
        rateKitchens: {},
      });
    }

    await newUser.save();
    roleId = newUser._id;

    // Store reference in the `User` schema
    const user = new User({ role, roleId });
    await user.save();

    res.status(201).json({ message: `${role} account created successfully`, user: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
