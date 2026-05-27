const express = require("express");
const router = express.Router();
const {
  getAllCategory,
  createCategory,
  showCategory,
  deleteCategory,
  updateCategory,
} = require("../controllers/categoryController");
const { updateBouquet } = require("../controllers/bouquetController");

router.get("/", getAllCategory);
router.post("/", createCategory);
router.get("/:id", showCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
