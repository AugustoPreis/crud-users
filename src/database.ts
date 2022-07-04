import { DataSource } from "typeorm";
import { User } from "./entities/User";

export const Database = new DataSource({
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'postgres',
	password: 'admin',
	database: 'crudUsers',
	synchronize: true,
	logging: true,
	entities: [User],
	subscribers: [],
	migrations: [],
});

Database.initialize()
	.then(() => {
		console.log('Database connected!');
	}).catch(err => {
		console.log('Error: ', err);
	});