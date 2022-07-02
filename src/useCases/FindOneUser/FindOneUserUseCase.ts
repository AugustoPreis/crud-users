import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IFindOneUserDTO } from "./FindOneUserDTO";

export class FindOneUserUseCase {
	constructor(
		private usersRepository: IUsersRepository,
	) { }

	async execute(data: IFindOneUserDTO) {
		return await this.usersRepository.findById(data.id);
	}
}