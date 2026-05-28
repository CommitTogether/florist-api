/*
  Warnings:

  - You are about to drop the column `deskripsi` on the `bouquet` table. All the data in the column will be lost.
  - You are about to drop the column `harga` on the `bouquet` table. All the data in the column will be lost.
  - You are about to drop the column `nama` on the `bouquet` table. All the data in the column will be lost.
  - You are about to drop the column `stok` on the `bouquet` table. All the data in the column will be lost.
  - You are about to drop the column `nama_pelanggan` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `total_harga` on the `order` table. All the data in the column will be lost.
  - Added the required column `name` to the `Bouquet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Bouquet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stock` to the `Bouquet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customer_name` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_price` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `bouquet` DROP COLUMN `deskripsi`,
    DROP COLUMN `harga`,
    DROP COLUMN `nama`,
    DROP COLUMN `stok`,
    ADD COLUMN `description` VARCHAR(191) NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `price` INTEGER NOT NULL,
    ADD COLUMN `stock` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `order` DROP COLUMN `nama_pelanggan`,
    DROP COLUMN `total_harga`,
    ADD COLUMN `customer_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `total_price` INTEGER NOT NULL;
