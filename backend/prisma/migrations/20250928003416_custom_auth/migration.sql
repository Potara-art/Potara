/*
  Warnings:

  - You are about to drop the column `auth0_id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - Added the required column `password_hash` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_auth0_id_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "auth0_id",
DROP COLUMN "name",
ADD COLUMN     "password_hash" TEXT NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;
