/*
  Warnings:

  - Added the required column `fileKey` to the `technologies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "technologies" ADD COLUMN     "fileKey" TEXT NOT NULL;
