import { Inject, Injectable } from "@nestjs/common";
import { UserRepository } from "@/domain/user/user.repository";
import { CustomPrismaService } from "nestjs-prisma";
import { ExtendedPrismaClient } from "../prisma";

@Injectable()
export class PrismaUserRepository implements UserRepository {
	constructor(
		@Inject("PrismaService")
		private prismaRepository: CustomPrismaService<ExtendedPrismaClient>,
	) {}

	async findAll(q: string) {
		const users = await this.prismaRepository.client.user.findMany({
			where: {
				firstName: {
					contains: q,
				},
			},
			omit: {
				password: true,
			},
		});
		return users;
	}

	async findById(id: string) {
		const user = await this.prismaRepository.client.user.findUnique({
			where: {
				id,
			},
			omit: {
				password: true,
			},
		});
		return user;
	}
}
