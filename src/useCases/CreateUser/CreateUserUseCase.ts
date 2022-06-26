import { IMailProvider } from '../../providers/IMailProvider';
import { User } from '../../entities/User';
import { ICreateUserDTO } from './CreateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepostiory';

export class CreateUserUseCase {
	constructor(
		private usersRepository: IUsersRepository,
		private mailProvider: IMailProvider,
	) { }

	async execute(data: ICreateUserDTO) {
		const alreadyExists = await this.usersRepository.findByEmail(data.email);

		if (alreadyExists) throw new Error('User already exists!');

		const user = new User(data);

		await this.usersRepository.save(user);
		
		await this.mailProvider.sendMail({
			to: {
				name: data.name,
				email: data.email
			},
			from: {
				name: 'My app team',
				email: 'myTeam@app.com'
			},
			subject: 'Hello!',
			body: '<p>Welcome to my plataform</p>'
		})
	}
}