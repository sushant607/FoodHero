import mongoose from "mongoose";

const { Schema, model } = mongoose;

const individualSchema = new Schema(
  {
    userName: { type: String, unique: true,required: true },
    password: { type: String, required: true },
    contact: { type: String, required: true },
    location: { type: String, required: true },
    reward: { type: Number, default: 0 },
    OrdersServed:{type:Number , default:0},
    OrdersReceived:{type:Number , default:0},
    DonationsServed:{type:Number , default:0},
    CommGroupId:{type:Number , default:0}
  },
  { timestamps: true }
);

const Individual = model("Individual", individualSchema);
export default Individual;
