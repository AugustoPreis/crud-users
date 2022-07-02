import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';
import { PostgresUsersRepository } from '../../repositories/implementations/PostgresUsersRepositories';

const postgresUsersRepository = new PostgresUsersRepository();

const createUserUseCase = new CreateUserUseCase(
	postgresUsersRepository,
);

const createUserController = new CreateUserController(
	createUserUseCase
);

export { createUserController, createUserUseCase }