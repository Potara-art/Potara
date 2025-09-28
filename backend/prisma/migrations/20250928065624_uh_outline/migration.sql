/*
  Warnings:

  - Added the required column `outline_url` to the `Reference` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reference" ADD COLUMN     "outline_url" TEXT NOT NULL;
