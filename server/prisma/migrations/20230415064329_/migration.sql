/*
  Warnings:

  - The primary key for the `favourite` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idFavourite` on the `favourite` table. All the data in the column will be lost.
  - Added the required column `favouriteId` to the `favourite` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `favourite` DROP PRIMARY KEY,
    DROP COLUMN `idFavourite`,
    ADD COLUMN `favouriteId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`favouriteId`);

-- AlterTable
ALTER TABLE `user` MODIFY `password` VARCHAR(191) NOT NULL;
