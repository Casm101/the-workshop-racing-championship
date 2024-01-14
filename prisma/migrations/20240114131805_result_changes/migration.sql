/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Race` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Team` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Result" ADD COLUMN     "averageLap" INTEGER,
ADD COLUMN     "fastestlap" INTEGER,
ADD COLUMN     "laps" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Race_name_key" ON "Race"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Team_name_key" ON "Team"("name");
