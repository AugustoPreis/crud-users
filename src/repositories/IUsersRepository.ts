import { User } from '../entities/User';

export interface IUsersRepository {
	findByEmail(email: string): Promise<User>,
	save(user: User): Promise<void>,
	edit(user: User): Promise<void>,
	findAll(): Promise<User[]>,
	deleteById(id: string): Promise<void>,
	findById(id: string): Promise<User>,
}