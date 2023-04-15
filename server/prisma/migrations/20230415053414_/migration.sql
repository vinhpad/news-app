-- CreateTable
CREATE TABLE `category` (
    `categoryId` INTEGER NOT NULL AUTO_INCREMENT,
    `nameCategory` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `category_nameCategory_key`(`nameCategory`),
    PRIMARY KEY (`categoryId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `favourite` (
    `idFavourite` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `newspaperId` INTEGER NOT NULL,
    `cteatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`idFavourite`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `userId` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(30) NOT NULL,
    `avaUrl` VARCHAR(191) NULL,
    `cteatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `user_email_key`(`email`),
    UNIQUE INDEX `user_username_key`(`username`),
    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `newspaper` (
    `newspaperId` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `image` VARCHAR(191) NULL,
    `content` VARCHAR(191) NULL,
    `writer` VARCHAR(191) NULL,
    `nameCategory` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `newspaper_title_key`(`title`),
    PRIMARY KEY (`newspaperId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `favourite` ADD CONSTRAINT `favourite_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `favourite` ADD CONSTRAINT `favourite_newspaperId_fkey` FOREIGN KEY (`newspaperId`) REFERENCES `newspaper`(`newspaperId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `newspaper` ADD CONSTRAINT `newspaper_nameCategory_fkey` FOREIGN KEY (`nameCategory`) REFERENCES `category`(`nameCategory`) ON DELETE RESTRICT ON UPDATE CASCADE;
