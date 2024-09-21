import { Injectable } from "@nestjs/common";
import { PrismaRepository } from "./prisma.repository";
import { UserRepository } from "@/domain/user/user.repository";

@Injectable()
export class PrismaUserRepository implements UserRepository {
	constructor(private readonly prismaRepository: PrismaRepository) {}

	async findAll(q: string) {
		const users = await this.prismaRepository.user.findMany({
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
}
