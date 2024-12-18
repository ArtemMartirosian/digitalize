/*
  Warnings:

  - You are about to drop the column `slug` on the `services` table. All the data in the column will be lost.
  - Added the required column `price` to the `services` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "services_slug_key";

-- AlterTable
ALTER TABLE "services" DROP COLUMN "slug",
ADD COLUMN     "features" TEXT[],
ADD COLUMN     "price" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "portfolio" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "portfolio_pkey" PRIMARY KEY ("id")
);
