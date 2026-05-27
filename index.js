const express = require("express");
const cors = require("cors");
const bouquetRoutes = require("./routes/bouquetRoutes");
const CategoryRoutes = require("./routes/categoryRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/bouquets", bouquetRoutes);
app.use("/api/category", CategoryRoutes);

app.listen(3000, () => console.log("Server running on Port 3000"));
