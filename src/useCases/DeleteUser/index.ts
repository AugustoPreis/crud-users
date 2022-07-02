import { PostgresUsersRepository } from '../../repositories/implementations/PostgresUsersRepositories';
import { DeleteUserUseCase } from './DeleteUserUseCase';
import { DeleteUserController } from './DeleteUserController';

const postgresUsersRepository = new PostgresUsersRepository();

const deleteUserUseCase = new DeleteUserUseCase(
	postgresUsersRepository,
);

const deleteUserController = new DeleteUserController(
	deleteUserUseCase,
);

export { deleteUserUseCase, deleteUserController }