import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '@/domain/user/user.repository';
import { CustomPrismaService } from 'nestjs-prisma';
import { ExtendedPrismaClient } from '../prisma';

@Injectable()
export class PrismaUserRepository implements UserRepository {
	constructor(
		@Inject('PrismaService')
		private prisma: CustomPrismaService<ExtendedPrismaClient>,
	) {}

	async findAll(q: string) {
		const users = await this.prisma.client.user.findMany({
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
		const user = await this.prisma.client.$kysely
			.selectFrom('users')
			.selectAll()
			.where('id', '=', id)
			.executeTakeFirst();
		return user;
	}
}
