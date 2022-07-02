import { Request, Response } from "express";
import { EditUserUseCase } from './EditUserUseCase';

export class EditUserController {
	constructor(
		private editUserUseCase: EditUserUseCase,
	) { }

	async handle(req: Request, res: Response): Promise<Response> {
		const { id, name, email, password } = req.body;

		try {
			await this.editUserUseCase.execute({
				id,
				name,
				email,
				password
			});

			return res.status(202).send();
		} catch (error) {
			return res.status(400).json({
				message: error.message || 'Unexpected error!',
			});
		}
	}
}