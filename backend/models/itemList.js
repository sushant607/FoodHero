import mongoose from "mongoose";

const { Schema, model } = mongoose;

const listedItemSchema = new Schema(
  {
    itemId: { type: mongoose.Schema.Types.ObjectId, auto: true },
    itemName: { type: String, required: true },
    itemType: { type: String, enum: ["Perishable", "Non-Perishable"], required: true },
    Description : {type: String} ,
    quantity: { type: Number, required: true },
    cost: { type: Number, required: true },
    status: { type: String, enum: ["Not ordered","Pending", "Delivered"], default: "Not ordered" },
    receiverId: { type: mongoose.Schema.Types.ObjectId, required: false },
    receiverType: { type: String, enum: ["Individual", "Ngo"], required: false },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "receiverType",
      required: false,
    },
    // Listed by (either an Individual or a Kitchen)
    listedById: { type: mongoose.Schema.Types.ObjectId, required: true },
    listedByType: { type: String, enum: ["Individual", "Kitchen"], required: true },
    listedBy: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "listedByType",
      required: true,
    },

    // Expiry settings based on item type
    expiryDate: {
      type: Date,
      required: function () {
        return this.itemType === "Non-Perishable"; // Required for non-perishable items
      },
    },
    timeLeft: {
      type: Date,
      default: function () {
        if (this.itemType === "Perishable") {
          return new Date(Date.now() + 48 * 60 * 60 * 1000); // 48 hours from now
        }
        return null;
      },
    },
  },
  { timestamps: true }
);

const ListedItem = model("ListedItem", listedItemSchema);
export default ListedItem;
