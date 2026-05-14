const express = require("express");
const router = express.Router();
const {
  getAllBouquets,
  getByIdBouquet,
  createBouquet,
  updateBouquet,
  deleteBouquet,
} = require("../controllers/bouquetController");

router.get("/", getAllBouquets);
router.get("/:id", getByIdBouquet);
router.post("/", createBouquet);
router.put("/:id", updateBouquet);
router.delete("/:id", deleteBouquet);

module.exports = router;
