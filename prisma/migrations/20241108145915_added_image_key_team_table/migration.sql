/*
  Warnings:

  - Added the required column `image` to the `team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageKey` to the `team` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "team" ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "imageKey" TEXT NOT NULL;
