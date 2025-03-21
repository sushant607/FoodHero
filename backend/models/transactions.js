const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  serverUserId: { type: String, enum: ["Individual", "Kitchen"], required: true },
  receiverUserId: { type: mongoose.Schema.Types.ObjectId, ref: "Individual", required: true },
  transactionId: { type: mongoose.Schema.Types.ObjectId, auto: true },
  status: { type: String, enum: ["Pending", "Delivered"], default: "Pending" },
  serverConfirmed: { type: Boolean, default: false },
  receiverConfirmed: { type: Boolean, default: false },
});

const Transaction = mongoose.model("Transaction", transactionSchema);
module.exports = Transaction;
