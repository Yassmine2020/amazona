-- CreateTable
CREATE TABLE `user` (
    `name` VARCHAR(50) NOT NULL,
    `email` VARCHAR(150) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `isAdmin` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `email`(`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

