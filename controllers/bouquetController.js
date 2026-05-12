const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllBouquets = async (req, res) => {
    try {
        const bouquet = await prisma.bouquet.findMany();
        res.json(bouquets);
    }catch(error){
        res.status(500).json({Message:"Error saat mengambil data"})
    }
}

module.exports = { getAllBouquets };