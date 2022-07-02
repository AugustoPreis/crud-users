import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { editUserController } from "./useCases/EditUser";

const router = Router();

router.post('/users', (req, res) => {
	return createUserController.handle(req, res);
});

router.put('/users', (req, res) => {
	return editUserController.handle(req, res);
})

export { router }