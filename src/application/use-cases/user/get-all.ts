import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/user/user.entity';
import { UserRepository } from 'src/domain/user/user.repository';

@Injectable()
export class GetAllUseCase {
	constructor(private readonly userRepository: UserRepository) {}

	execute(q: string): Promise<User[]> {
		return this.userRepository.findAll(q);
	}
}
