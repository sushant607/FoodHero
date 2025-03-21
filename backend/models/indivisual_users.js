import mongoose from "mongoose";

const { Schema, model } = mongoose;

const individualSchema = new Schema(
  {
    userName: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    contact: { type: String, required: true },
    location: { type: String, required: true },
    reward: { type: Number, default: 0 },
    OrdersServed: { type: Number, default: 0 },
    OrdersReceived: { type: Number, default: 0 },
    DonationsServed: { type: Number, default: 0 },
    CommGroupId: { type: String, default: 0 },

    // Orders placed by the user
    ordersPlaced: [
      {
        orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
        status: { type: String, enum: ["pending", "completed"], default: "pending" },
        foodItems: [{ foodName: String, quantity: Number,cost: Number }], // List of food items ordered
        orderedAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

const Individual = model("Individual", individualSchema);
export default Individual;
