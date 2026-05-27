const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//index
const getAllCategory = async (req, res) => {
  try {
    const category = await prisma.category.findMany();
    res.status(200).json({
      status: "success",
      message: "Data retrieved successfully",
      data: category,
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
const showCategory = async (req, res) => {
  try {
    const category = await prisma.category.findUnique({
      where: { id: Number(req.params.id) },
    });

    if (!category) {
      return res.status(404).json({
        status: "error",
        message: "Data not found",
        data: null,
      });
    }

    res.status(200).json({
      status: "success",
      message: "Data retrieved successfully",
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to restrieve data",
      error: error.message,
    });
  }
};

//create
const createCategory = async (req, res) => {
  try {
    const { name_category } = req.body;
    const category = await prisma.category.create({
      data: { name_category },
    });
    res.status(200).json({
      status: "success",
      message: "The data was successfully created",
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "failed to create data",
      error: error.message,
    });
  }
};

//update
const updateCategory = async (req, res) => {
  try {
    const { name_category } = req.body;
    const category = await prisma.category.update({
      where: { id: Number(req.params.id) },
      data: { name_category },
    });
    res.status(200).json({
      status: "success",
      message: "The data was successfully updated",
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "data failed tp update",
      error: error.message,
    });
  }
};

//delete
const deleteCategory = async (req, res) => {
  try {
    const category = await prisma.category.delete({
      where: { id: Number(req.params.id) },
    });
    res.status(200).json({
      status: "succes",
      message: "data was succesfully deleted",
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "data failed to delete",
      error: error.message,
    });
  }
};

module.exports = {
  getAllCategory,
  createCategory,
  showCategory,
  updateCategory,
  deleteCategory,
};
