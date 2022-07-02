import { PostgresUsersRepository } from '../../repositories/implementations/PostgresUsersRepositories';
import { FindOneUserUseCase } from './FindOneUserUseCase';
import { FindOneUserController } from './FindOneUserController';

const postgresUsersRepository = new PostgresUsersRepository();

const findOneUserUseCase = new FindOneUserUseCase(
	postgresUsersRepository,
);

const findOneUserController = new FindOneUserController(
	findOneUserUseCase,
);

export { findOneUserUseCase, findOneUserController }