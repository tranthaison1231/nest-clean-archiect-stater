export abstract class BaseRepository<T> {
	abstract findAll(q: string): Promise<T[]>;

	abstract findById(id: string): Promise<T | undefined>;
}
