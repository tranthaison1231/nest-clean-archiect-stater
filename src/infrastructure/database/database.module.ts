import { Module } from "@nestjs/common";
import { PrismaUserRepository } from "./repositories/prisma-user.repository";
import { UserRepository } from "@/domain/user/user.repository";

@Module({
	providers: [
		PrismaUserRepository,
		{
			provide: UserRepository,
			useClass: PrismaUserRepository,
		},
	],
	exports: [UserRepository],
})
export class DatabaseModule {}
