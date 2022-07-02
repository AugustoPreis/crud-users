import { IUsersRepository } from "../../repositories/IUsersRepository";

export class FindUserUseCase {
	constructor(
		private usersRepository: IUsersRepository,
	) { }

	async execute() {
		const data = await this.usersRepository.findAll();

		return data;
	}
}