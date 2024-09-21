import { Controller, Get, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { GetAllUseCase } from "src/application/use-cases/user/get-all";

@ApiTags("users")
@Controller("users")
export class UserController {
	constructor(private readonly getAllUseCase: GetAllUseCase) {}

	@Get()
	findAll(@Query("q") q: string) {
		return this.getAllUseCase.execute(q);
	}
}
