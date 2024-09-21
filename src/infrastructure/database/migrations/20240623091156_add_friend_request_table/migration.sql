/*
  Warnings:

  - You are about to drop the `user_friends` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "user_friends" DROP CONSTRAINT "user_friends_friendId_fkey";

-- DropForeignKey
ALTER TABLE "user_friends" DROP CONSTRAINT "user_friends_friendOfId_fkey";

-- DropTable
DROP TABLE "user_friends";

-- CreateTable
CREATE TABLE "friend_requests" (
    "id" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "receiverId" TEXT NOT NULL,
    "status" "FriendStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "friend_requests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "friend_ship" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "userOfId" TEXT NOT NULL,
    "friendSince" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "friend_ship_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "friend_requests" ADD CONSTRAINT "friend_requests_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "friend_requests" ADD CONSTRAINT "friend_requests_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "friend_ship" ADD CONSTRAINT "friend_ship_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "friend_ship" ADD CONSTRAINT "friend_ship_userOfId_fkey" FOREIGN KEY ("userOfId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
