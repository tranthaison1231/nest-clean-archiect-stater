-- CreateEnum
CREATE TYPE "FriendStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED');

-- CreateTable
CREATE TABLE "user_friends" (
    "id" TEXT NOT NULL,
    "friendId" TEXT NOT NULL,
    "friendOfId" TEXT NOT NULL,
    "status" "FriendStatus" NOT NULL,

    CONSTRAINT "user_friends_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user_friends" ADD CONSTRAINT "user_friends_friendId_fkey" FOREIGN KEY ("friendId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_friends" ADD CONSTRAINT "user_friends_friendOfId_fkey" FOREIGN KEY ("friendOfId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
