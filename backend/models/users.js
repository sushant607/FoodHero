import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    role: {
      type: String,
      enum: ["Individual", "Kitchen", "Ngo"], // Only accepts these roles
      required: true,
    },
    roleId: {
      type: mongoose.Schema.Types.ObjectId, // Will store ID from the corresponding role schema
      refPath: "role", // Reference based on role type
      required: true,
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);
export default User;
