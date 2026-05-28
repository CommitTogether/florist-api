/*
  Warnings:

  - You are about to drop the column `categoryId` on the `bouquet` table. All the data in the column will be lost.
  - You are about to drop the column `namaPelanggan` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `totalHarga` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `user` table. All the data in the column will be lost.
  - Added the required column `category_id` to the `Bouquet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Bouquet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama_pelanggan` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_harga` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `bouquet` DROP FOREIGN KEY `bouquet_categoryId_fkey`;

-- AlterTable
ALTER TABLE `bouquet` DROP COLUMN `categoryId`,
    ADD COLUMN `category_id` INTEGER NOT NULL,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `category` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `order` DROP COLUMN `namaPelanggan`,
    DROP COLUMN `totalHarga`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `nama_pelanggan` VARCHAR(191) NOT NULL,
    ADD COLUMN `total_harga` INTEGER NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AddForeignKey
ALTER TABLE `Bouquet` ADD CONSTRAINT `Bouquet_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
