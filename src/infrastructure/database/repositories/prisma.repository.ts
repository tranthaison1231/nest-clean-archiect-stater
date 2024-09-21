import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaRepository extends PrismaClient implements OnModuleInit {
	constructor() {
		super({
			log: ["query", "info", "warn", "error"],
		});
	}

	async onModuleInit() {
		await this.$connect();
	}
}
