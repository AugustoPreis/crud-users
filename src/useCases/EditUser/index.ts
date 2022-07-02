import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepositories";
import { EditUserController } from './EditUserController';
import { EditUserUseCase } from './EditUserUseCase';

const postgresUsersRepository = new PostgresUsersRepository();

const editUserUseCase = new EditUserUseCase(
	postgresUsersRepository,
);

const editUserController = new EditUserController(
	editUserUseCase,
);

export { editUserController, editUserUseCase }