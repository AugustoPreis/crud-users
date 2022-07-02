import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

export class PostgresUsersRepository implements IUsersRepository {
	private users: User[] = [];

	async findByEmail(email: string): Promise<User> {
		const user = this.users.find(user => user.email === email);

		return user;
	}

	async findById(id: string): Promise<User> {
		const index = this.users.findIndex(el => el.id === id);

		if (index === -1) throw new Error('User not found!');

		return this.users[index];
	}

	async findAll() {
		return this.users;
	}

	async save(user: User): Promise<void> {
		this.users.push(user);
	}

	async edit(user: User): Promise<void> {
		const index = this.users.findIndex(el => el.id === user.id);

		if (index === -1) throw new Error('User not found!');

		this.users[index] = user;
	}

	async deleteById(id: string): Promise<void> {
		const index = this.users.findIndex(el => el.id === id);

		if (index === -1) throw new Error('User not found!');

		this.users.splice(index, 1);
	}
}