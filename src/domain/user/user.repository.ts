import { User } from "./user.model";

export abstract class UserRepository {
	abstract findAll(q: string): Promise<User[]>;

	abstract findById(id: string): Promise<User | null>;
}
