import { PrismaClient } from '@prisma/client';
import kyselyExtension from 'prisma-extension-kysely';
import type { DB } from './kysely';
import {
	CamelCasePlugin,
	Kysely,
	PostgresAdapter,
	PostgresIntrospector,
	PostgresQueryCompiler,
} from 'kysely';
import { formatQuery } from 'prisma-query-formatter';

function configurePrisma() {
	const prisma = new PrismaClient({
		log: [{ emit: 'event', level: 'query' }],
	});

	prisma.$on('query', (e) => {
		// biome-ignore lint/suspicious/noConsole: <explanation>
		console.info(formatQuery(e.query, e.params, { escapeParams: true }));
	});

	return prisma.$extends(
		kyselyExtension({
			kysely: (driver) =>
				new Kysely<DB>({
					dialect: {
						createDriver: () => driver,
						createAdapter: () => new PostgresAdapter(),
						createIntrospector: (db) => new PostgresIntrospector(db),
						createQueryCompiler: () => new PostgresQueryCompiler(),
					},
					plugins: [new CamelCasePlugin()],
				}),
		}),
	);
}

export type DbClient = ReturnType<typeof configurePrisma>;
export type DbTransactionClient = Parameters<
	Parameters<DbClient['$transaction']>[0]
>[0];

export let extendedPrismaClient = configurePrisma();

export function recreatePrismaInstance() {
	extendedPrismaClient.$disconnect();

	extendedPrismaClient = configurePrisma();

	return extendedPrismaClient;
}

export type ExtendedPrismaClient = typeof extendedPrismaClient;
