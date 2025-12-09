require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const authRoute = require("./routes/auth");
const HoldingsModel = require("./model/HoldingsModel");
const PositionsModel = require("./model/PositionsModel");
const OrdersModel = require("./model/OrdersModel");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 3002;

// ----------- CORS ---------------
const corsOptions = {
  origin: [
    "https://tradex-3-agri.onrender.com", // frontend
    "https://tradex-dashboard-4u8g.onrender.com" // dashboard
  ],
  credentials: true,
};
app.use(cors(corsOptions));
// --------------------------------

app.use(express.json());
app.use((req, res, next) => {
  console.log("Incoming request:", req.method, req.url);
  next();
});

// ---------- API ROUTES ----------
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

// ---------- SERVE FRONTEND BUILD ----------
app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// ---------- START SERVER ----------
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to DB:", err.message);
  });
