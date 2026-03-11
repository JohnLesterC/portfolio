const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json());

// Routes
app.use("/api/contact", require("./routes/contact"));

// Health check
app.get("/api/health", (req, res) => res.json({ status: "ok" }));

// Start server immediately — MongoDB is optional
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Connect to MongoDB if URI is set (used to persist messages)
if (process.env.MONGO_URI) {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) =>
      console.warn(
        "MongoDB unavailable (messages will not be persisted):",
        err.message,
      ),
    );
}
