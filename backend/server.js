import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import transactionRoutes from "./routes/transactionRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import itemRoute from "./routes/itemRoute.js"
import cors from "cors";

dotenv.config(); // Load environment variables

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
// Get MongoDB URI from environment variables
const mongoURI = process.env.MONGO_URL;

async function connectDB() {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB Atlas using Mongoose");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
}

// Connect to MongoDB Atlas
connectDB();
app.use("/api/transactions", transactionRoutes);
app.use("/api",authRoutes);
app.use("/api",itemRoute);
app.get("/", (req, res) => {
    res.send("MongoDB Atlas is connected!");
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

app.use("/transactions", transactionRoutes);