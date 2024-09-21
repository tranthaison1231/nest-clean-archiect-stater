/*
  Warnings:

  - Made the column `createdAt` on table `groups` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "groups" ALTER COLUMN "createdAt" SET NOT NULL;
