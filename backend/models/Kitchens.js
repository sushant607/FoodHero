import mongoose from "mongoose";

const { Schema, model } = mongoose;

const kitchenSchema = new Schema(
  {
    fssaiId: {
      type: String,
      unique: true, // Ensures FSSAI ID is unique
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    foodAvailableFor: {
      type: Number,
      default: null, // Optional field
    },
    location: {
      type: String,
      required: true,
    },
    menu: {
      type: Map, // Represents a dictionary (food name → cost)
      of: Number, // Example: { "Rice": 50, "Dal": 30 }
      default: {}, // Optional field
    },
    ordersServed: {
      type: Number,
      default: 0, // Optional field
    },
    donationsServed: {
      type: Number,
      default: 0, // Optional field
    },
    rewards: {
      type: Number,
      default: 0, // Optional field
    },
  },
  { timestamps: true }
);

const Kitchen = model("Kitchen", kitchenSchema);
export default Kitchen;
