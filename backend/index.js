require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path"); // needed to serve static files

const authRoute = require("./routes/auth");
const HoldingsModel = require("./model/HoldingsModel");
const PositionsModel = require("./model/PositionsModel");
const OrdersModel = require("./model/OrdersModel");
const connectDB = require("./config/db"); // DB connection

const app = express();
const PORT = process.env.PORT || 3002;

// ---------- CORS configuration ----------
const corsOptions = {
  origin: [
    "https://tradex-3-agri.onrender.com",        // Frontend
    "https://tradex-dashboard-4u8g.onrender.com" // Dashboard
  ],
  credentials: true,
};
app.use(cors(corsOptions));
// ----------------------------------------

// Middleware
app.use(express.json()); // JSON parser

// API Routes
app.use("/api/auth", authRoute);

app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();
    res.json({ success: true, message: "Order saved!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.use('/frontend', express.static(path.join(__dirname, '../frontend/build')));
app.use('/dashboard', express.static(path.join(__dirname, '../dashboard/build')));

app.get(/^\/frontend(\/.*)?$/, (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});

app.get(/^\/dashboard(\/.*)?$/, (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dashboard/build', 'index.html'));
});

// Redirect root to frontend
app.get("/", (req, res) => {
  res.redirect("/frontend");
});

// Connect DB and start server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("Failed to connect to DB:", err.message);
  });
