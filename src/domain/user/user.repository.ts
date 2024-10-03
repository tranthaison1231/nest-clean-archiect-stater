import { BaseRepository } from '../base/base.repository';
import { User } from './user.entity';

export abstract class UserRepository extends BaseRepository<User> {}
