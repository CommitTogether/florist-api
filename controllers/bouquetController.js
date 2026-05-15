const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//index
const getAllBouquets = async (req, res) => {
  try {
    const bouquets = await prisma.bouquet.findMany();
    res.json(bouquets);
  } catch (error) {
    res.status(500).json({ message: "Error saat mengambil data" });
  }
};

//show
const getByIdBouquet = async (req, res) => {
  try {
    const bouquet = await prisma.bouquet.findUnique({
      where: { id: Number(req.params.id) },
    });
    res.json(bouquet);
  } catch (error) {
    res.status(500).json({ message: "data tidak ditemukan" });
  }
};

//create
const createBouquet = async (req, res) => {
  try {
    const { nama, harga, stok, deskripsi } = req.body;
    const bouquet = await prisma.bouquet.create({
      data: { nama, harga, stok, deskripsi },
    });
    res.json(bouquet);
  } catch (error) {
    res.status(500).json({ message: "Error saat membuat data" });
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
    res.json(bouquet);
  } catch (error) {
    res.status(500).json({ message: "Error saat mengupdate data" });
  }
};

//delete
const deleteBouquet = async (req, res) => {
  try {
    await prisma.bouquet.delete({
      where: { id: Number(req.params.id) },
    });
    res.json({ message: "Berhasil dihapus" }); // ← pindah ke sini
  } catch (error) {
    res.status(500).json({ message: "Error saat menghapus data" });
  }
};

module.exports = {
  getAllBouquets,
  getByIdBouquet,
  createBouquet,
  updateBouquet,
  deleteBouquet,
};
