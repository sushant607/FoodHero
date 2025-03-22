import mongoose from "mongoose";

const { Schema, model } = mongoose;

const kitchenSchema = new Schema(
  {
    fssaiId: {
      type: String,
      unique: true, // Ensures FSSAI ID is unique
      required: true,
    },
    contact: {type:Number , required: true},
    password: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
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
