/*
  Warnings:

  - You are about to drop the column `position` on the `team` table. All the data in the column will be lost.
  - Added the required column `professionPosition` to the `team` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "team" DROP COLUMN "position",
ADD COLUMN     "companyPosition" TEXT,
ADD COLUMN     "professionPosition" TEXT NOT NULL;
