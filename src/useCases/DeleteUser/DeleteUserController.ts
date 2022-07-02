
import { Request, Response } from 'express';
import { DeleteUserUseCase } from './DeleteUserUseCase';

export class DeleteUserController {
	constructor(
		private deleteUserUseCase: DeleteUserUseCase
	) { }

	async handle(req: Request, res: Response): Promise<Response> {
		const { id } = req.query;

		try {
			await this.deleteUserUseCase.execute({ id: id.toString() });

			return res.status(202).send();
		} catch (error) {
			return res.status(400).json({
				message: error.message || 'Unexpected error!',
			});
		}
	}
}