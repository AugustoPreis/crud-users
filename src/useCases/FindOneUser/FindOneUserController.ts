import { Request, Response } from 'express';
import { FindOneUserUseCase } from './FindOneUserUseCase';

export class FindOneUserController {
	constructor(
		private findOneUserUseCase: FindOneUserUseCase
	) { }

	async handle(req: Request, res: Response): Promise<Response> {
		const { id } = req.query;

		try {
			const result = this.findOneUserUseCase.execute({ id: id.toString() });

			return res.status(202).send(result);
		} catch (error) {
			return res.status(400).json({
				message: error.message || 'Unexpected error!',
			})
		}

	}
}