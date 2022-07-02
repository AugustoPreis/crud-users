import { Request, Response } from "express";
import { FindUserUseCase } from "./FindUserUseCase";

export class FindUserController {
	constructor(
		private findUserUseCase: FindUserUseCase,
	) { }

	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const result = await this.findUserUseCase.execute();

			return res.status(202).send(result);
		} catch (error) {
			return res.status(400).json({
				message: error.message || 'Unexpected error!',
			});
		}
	}
}