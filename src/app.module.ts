import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { CacheModule } from "@nestjs/cache-manager";
import redisStore from "cache-manager-redis-store";
import { RedisClientOptions } from "redis";
import { StoreConfig } from "cache-manager";
import { DatabaseModule } from "./infrastructure/database/database.module";
import { UserController } from "./presentation/rest/user.controller";
import { GetAllUseCase } from "./application/use-cases/user/get-all";

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		CacheModule.registerAsync<RedisClientOptions>({
			inject: [ConfigService],
			useFactory: async (configService: ConfigService) =>
				({
					store: redisStore,
					url: configService.get<string>("REDIS_URL"),
				}) as StoreConfig,
			isGlobal: true,
		}),
		DatabaseModule,
	],
	controllers: [UserController],
	providers: [GetAllUseCase],
})
export class AppModule {}
