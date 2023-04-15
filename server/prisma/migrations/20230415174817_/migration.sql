/*
  Warnings:

  - The primary key for the `category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `categoryId` on the `category` table. All the data in the column will be lost.
  - The primary key for the `favourite` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `favouriteId` on the `favourite` table. All the data in the column will be lost.
  - You are about to drop the column `newspaperId` on the `favourite` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `favourite` table. All the data in the column will be lost.
  - The primary key for the `newspaper` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `newspaperId` on the `newspaper` table. All the data in the column will be lost.
  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `userId` on the `user` table. All the data in the column will be lost.
  - Added the required column `idCategory` to the `category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idFavourite` to the `favourite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idNewspaper` to the `favourite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idUser` to the `favourite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idNewspaper` to the `newspaper` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idUser` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `favourite` DROP FOREIGN KEY `favourite_newspaperId_fkey`;

-- DropForeignKey
ALTER TABLE `favourite` DROP FOREIGN KEY `favourite_userId_fkey`;

-- AlterTable
ALTER TABLE `category` DROP PRIMARY KEY,
    DROP COLUMN `categoryId`,
    ADD COLUMN `idCategory` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`idCategory`);

-- AlterTable
ALTER TABLE `favourite` DROP PRIMARY KEY,
    DROP COLUMN `favouriteId`,
    DROP COLUMN `newspaperId`,
    DROP COLUMN `userId`,
    ADD COLUMN `idFavourite` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `idNewspaper` INTEGER NOT NULL,
    ADD COLUMN `idUser` INTEGER NOT NULL,
    ADD PRIMARY KEY (`idFavourite`);

-- AlterTable
ALTER TABLE `newspaper` DROP PRIMARY KEY,
    DROP COLUMN `newspaperId`,
    ADD COLUMN `idNewspaper` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`idNewspaper`);

-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    DROP COLUMN `userId`,
    ADD COLUMN `idUser` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`idUser`);

-- AddForeignKey
ALTER TABLE `favourite` ADD CONSTRAINT `favourite_idUser_fkey` FOREIGN KEY (`idUser`) REFERENCES `user`(`idUser`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `favourite` ADD CONSTRAINT `favourite_idNewspaper_fkey` FOREIGN KEY (`idNewspaper`) REFERENCES `newspaper`(`idNewspaper`) ON DELETE RESTRICT ON UPDATE CASCADE;
