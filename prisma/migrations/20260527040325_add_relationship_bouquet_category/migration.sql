/*
  Warnings:

  - Added the required column `categoryId` to the `bouquet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `bouquet` ADD COLUMN `categoryId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `bouquet` ADD CONSTRAINT `bouquet_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
