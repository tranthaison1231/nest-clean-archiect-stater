import { BaseRepository } from '../base/base.repository';
import { User } from './user.model';

export abstract class UserRepository extends BaseRepository<User> {}
