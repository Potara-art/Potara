-- DropForeignKey
ALTER TABLE "Reference" DROP CONSTRAINT "Reference_user_id_fkey";

-- AlterTable
ALTER TABLE "Reference" ALTER COLUMN "user_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Reference" ADD CONSTRAINT "Reference_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
