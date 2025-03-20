import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 5000;

// MongoDB Atlas connection URI (Replace <username>, <password>, and <dbname>)
const uri = "mongodb+srv://sushantbagul607:QNAcpTVHpPglEVLf@cluster0.3nnif.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB Atlas
async function connectDB() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB Atlas using Mongoose");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
}

// Call the connection function
connectDB();

// Sample API endpoint
app.get("/", (req, res) => {
    res.send("MongoDB Atlas is connected!");
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
