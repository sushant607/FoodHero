import mongoose from "mongoose";

const { Schema, model } = mongoose;

const transactionSchema = new Schema({
  serverUserId: { type: String, enum: ["Individual", "Kitchen"], required: true },
  receiverUserId: { type: Schema.Types.ObjectId, ref: "Individual", required: true },
  transactionId: { type: Schema.Types.ObjectId, auto: true },
  status: { type: String, enum: ["Pending", "Delivered"], default: "Pending" },
  serverConfirmed: { type: Boolean, default: false },
  receiverConfirmed: { type: Boolean, default: false },
});

const Transaction = model("Transaction", transactionSchema);
export default Transaction;
