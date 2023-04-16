/*
  Warnings:

  - You are about to drop the column `avaUrl` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `avaUrl`,
    ADD COLUMN `profile_photo_path` VARCHAR(191) NULL;
