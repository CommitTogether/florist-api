const { PrismaClient } = require("@prisma/client");
// import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//index
const getAllBouquets = async (req, res) => {
  try {
    const bouquets = await prisma.bouquet.findMany();
    res.status(200).json({
      status: "success",
      message: "Data berhasil diambil",
      data: bouquets,
    });
  } catch (error) {
    // res.status(500).json({ message: "Error saat mengambil data", error: error.message });
    res.status(500).json({
      status: "error",
      message: "Error saat mengambil data",
      error: error.message
    });
  }
};

//show
const getByIdBouquet = async (req, res) => {
  try {
    const bouquet = await prisma.bouquet.findUnique({
      where: { id: Number(req.params.id) },
    });

    if (!bouquet) {
      return res.status(404).json({
        status: "error",
        message: "Data tidak ditemukan",
        data: null
      });
    };

    res.status(200).json({
      status: "success",
      message: "Data berhasil diambil",
      data: bouquet
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error saat mengambil data",
      error: error.message
    });
  }
};

//create
const createBouquet = async (req, res) => {
  try {
    const { nama, harga, stok, deskripsi } = req.body;
    const bouquet = await prisma.bouquet.create({
      data: { nama, harga, stok, deskripsi },
    });
    res.status(201).json({
      status: "success",
      message: "Data berhasil dibuat",
      data: bouquet
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error saat membuat data",
      error: error.message
    });
  }
};

//update
const updateBouquet = async (req, res) => {
  try {
    const { nama, harga, stok, deskripsi } = req.body;
    const bouquet = await prisma.bouquet.update({
      where: { id: Number(req.params.id) },
      data: { nama, harga, stok, deskripsi },
    });
    res.status(200).json({
      status: "success",
      message: "Data berhasil diupdate",
      data: bouquet
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error saat mengupdate data",
      error: error.message
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
      message: "Data berhasil dihapus"
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error saat menghapus data",
      error: error.message
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
