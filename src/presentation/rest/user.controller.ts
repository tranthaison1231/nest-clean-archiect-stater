import { GetOneUseCase } from '@/application/use-cases/user/get-one';
import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetAllUseCase } from 'src/application/use-cases/user/get-all';

@ApiTags('users')
@Controller('users')
export class UserController {
	constructor(
		private readonly getAllUseCase: GetAllUseCase,
		private readonly getOneUseCase: GetOneUseCase,
	) {}

	@Get()
	findAll(@Query('q') q: string) {
		return this.getAllUseCase.execute(q);
	}

	@Get(':id')
	findById(@Param('id') id: string) {
		return this.getOneUseCase.execute(id);
	}
}
