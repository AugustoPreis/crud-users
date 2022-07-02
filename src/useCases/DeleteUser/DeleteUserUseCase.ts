import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IDeleteUserDTO } from "./DeleteUserDTO";

export class DeleteUserUseCase {
	constructor(
		private usersRepository: IUsersRepository,
	) { }

	async execute(data: IDeleteUserDTO) {
		await this.usersRepository.deleteById(data.id);
	}
}