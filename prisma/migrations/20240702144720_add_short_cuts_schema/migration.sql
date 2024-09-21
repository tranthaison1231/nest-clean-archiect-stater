-- CreateTable
CREATE TABLE "short_cuts" (
    "id" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "short_cuts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "short_cuts" ADD CONSTRAINT "short_cuts_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "short_cuts" ADD CONSTRAINT "short_cuts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
