import { Database } from '../../database';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

export class PostgresUsersRepository implements IUsersRepository {
	private repository = Database.getRepository(User);

	async findByEmail(email: string): Promise<User> {
		const user = await this.repository.findOneBy({ email });

		return user;
	}

	async findById(id: string): Promise<User> {
		const user = await this.repository.findOneBy({ id });

		return user;
	}

	async findAll() {
		const users = await this.repository.find();

		return users;
	}

	async save(user: User): Promise<void> {
		await this.repository.save(user);
	}

	async edit(user: User): Promise<void> {
		await this.repository.update(user.id, user);
	}

	async deleteById(id: string): Promise<void> {
		await this.repository.delete({ id });
	}
}