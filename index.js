const express = require("express");
const cors = require("cors");
const bouquetRoutes = require("./routes/bouquetRoutes"); // Diarahkan ke folder routes

const app = express();
app.use(cors());
app.use(express.json());

// Gunakan route yang benar
app.use("/api/bouquets", bouquetRoutes);

app.listen(3000, () => console.log("Server running on Port 3000"));