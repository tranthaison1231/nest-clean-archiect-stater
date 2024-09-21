import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/user/user.model';
import { UserRepository } from 'src/domain/user/user.repository';

@Injectable()
export class GetOneUseCase {
	constructor(private readonly userRepository: UserRepository) {}

	execute(id: string): Promise<User | undefined> {
		return this.userRepository.findById(id);
	}
}
