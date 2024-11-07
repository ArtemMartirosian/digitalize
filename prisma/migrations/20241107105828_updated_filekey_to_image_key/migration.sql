/*
  Warnings:

  - You are about to drop the column `fileKey` on the `technologies` table. All the data in the column will be lost.
  - Added the required column `imageKey` to the `technologies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "technologies" DROP COLUMN "fileKey",
ADD COLUMN     "imageKey" TEXT NOT NULL;
