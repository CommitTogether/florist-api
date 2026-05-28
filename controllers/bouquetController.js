const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//index
const getAllBouquets = async (req, res) => {
  try {
    const bouquets = await prisma.bouquet.findMany({
      include: { category: true },
    });
    res.status(200).json({
      status: "success",
      message: "Data retrieved successfully",
      data: bouquets,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to retrieve data",
      error: error.message,
    });
  }
};

//show
const getByIdBouquet = async (req, res) => {
  try {
    const bouquet = await prisma.bouquet.findUnique({
      where: { id: Number(req.params.id) },
      include: { category: true },
    });

    if (!bouquet) {
      return res.status(404).json({
        status: "error",
        message: "Data not found",
        data: null,
      });
    }

    res.status(200).json({
      status: "success",
      message: "Data retrieved successfully",
      data: bouquet,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to retrieve data",
      error: error.message,
    });
  }
};

//create
const createBouquet = async (req, res) => {
  try {
    const { name, price, stock, description, category_id } = req.body;
    const bouquet = await prisma.bouquet.create({
      data: {
        name,
        price,
        stock,
        description,
        category_id: Number(category_id),
      },
    });
    res.status(201).json({
      status: "success",
      message: "Data created successfully",
      data: bouquet,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to create data",
      error: error.message,
    });
  }
};

//update
const updateBouquet = async (req, res) => {
  try {
    const { name, price, stock, description, category_id } = req.body;
    const bouquet = await prisma.bouquet.update({
      where: { id: Number(req.params.id) },
      data: {
        name,
        price,
        stock,
        description,
        category_id: Number(category_id),
      },
    });
    res.status(200).json({
      status: "success",
      message: "Data updated successfully",
      data: bouquet,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to update data",
      error: error.message,
    });
  }
};

//delete
const deleteBouquet = async (req, res) => {
  try {
    await prisma.bouquet.delete({
      where: { id: Number(req.params.id) },
    });
    res.status(200).json({
      status: "success",
      message: "Data deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to delete data",
      error: error.message,
    });
  }
};

module.exports = {
  getAllBouquets,
  getByIdBouquet,
  createBouquet,
  updateBouquet,
  deleteBouquet,
};
