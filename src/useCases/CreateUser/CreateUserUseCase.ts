import { User } from '../../entities/User';
import { ICreateUserDTO } from './CreateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';

export class CreateUserUseCase {
	constructor(
		private usersRepository: IUsersRepository,
	) { }

	async execute(data: ICreateUserDTO) {
		const alreadyExists = await this.usersRepository.findByEmail(data.email);

		if (alreadyExists) throw new Error('User already exists!');

		const user = new User(data);

		await this.usersRepository.save(user);
	}
}