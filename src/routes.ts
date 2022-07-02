import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { editUserController } from "./useCases/EditUser";
import { findUserController } from "./useCases/FindUser";

const router = Router();

router.get('/users', (req, res) => {
	return findUserController.handle(req, res);
})

router.post('/users', (req, res) => {
	return createUserController.handle(req, res);
});

router.put('/users', (req, res) => {
	return editUserController.handle(req, res);
});

export { router }