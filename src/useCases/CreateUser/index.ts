import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';
import { PostgresUsersRepository } from '../../repositories/implementations/PostgresUsersRepositories';
import { MailtrapMailProvider } from './../../providers/implementations/MailtrapMailProvider';

const mailtrapMailProvider = new MailtrapMailProvider();
const postgresUsersRepository = new PostgresUsersRepository();

const createUserUseCase = new CreateUserUseCase(
	postgresUsersRepository,
	mailtrapMailProvider
);

const createUserController = new CreateUserController(
	createUserUseCase
);

export { createUserController, createUserUseCase }