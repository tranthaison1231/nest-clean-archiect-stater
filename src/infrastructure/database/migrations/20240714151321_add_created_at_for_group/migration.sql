-- AlterTable
ALTER TABLE "groups" ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;

-- Update data for groups
UPDATE "groups" SET "createdAt" = CURRENT_TIMESTAMP;

