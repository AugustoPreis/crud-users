import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IEditUserDTO } from "./EditUserDTO";

export class EditUserUseCase {
	constructor(
		private usersRepository: IUsersRepository,
	) { }

	async execute(data: IEditUserDTO) {
		const user = new User(data);

		await this.usersRepository.edit(user);
	}
}