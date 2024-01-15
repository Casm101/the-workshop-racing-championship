-- DropForeignKey
ALTER TABLE "Driver" DROP CONSTRAINT "Driver_teamId_fkey";

-- DropForeignKey
ALTER TABLE "Race" DROP CONSTRAINT "Race_championshipId_fkey";

-- DropForeignKey
ALTER TABLE "Result" DROP CONSTRAINT "Result_driverId_fkey";

-- DropForeignKey
ALTER TABLE "Result" DROP CONSTRAINT "Result_raceId_fkey";

-- AlterTable
ALTER TABLE "Driver" ALTER COLUMN "teamId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Driver" ADD CONSTRAINT "Driver_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Race" ADD CONSTRAINT "Race_championshipId_fkey" FOREIGN KEY ("championshipId") REFERENCES "Championship"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Result" ADD CONSTRAINT "Result_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "Race"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Result" ADD CONSTRAINT "Result_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE CASCADE ON UPDATE CASCADE;
