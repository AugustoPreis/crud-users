import { PostgresUsersRepository } from '../../repositories/implementations/PostgresUsersRepositories';
import { FindUserController } from './FindUserController';
import { FindUserUseCase } from './FindUserUseCase';

const postgresUsersRepository = new PostgresUsersRepository();

const findUserUseCase = new FindUserUseCase(
	postgresUsersRepository,
);

const findUserController = new FindUserController(
	findUserUseCase,
);

export { findUserUseCase, findUserController }