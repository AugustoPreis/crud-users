import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { deleteUserController } from "./useCases/DeleteUser";
import { editUserController } from "./useCases/EditUser";
import { findOneUserController } from "./useCases/FindOneUser";
import { findUserController } from "./useCases/FindUser";

const router = Router();

router.get('/users', (req, res) => {
	return findUserController.handle(req, res);
})

router.get('/users/byId', (req, res) => {
	return findOneUserController.handle(req, res);
})

router.post('/users', (req, res) => {
	return createUserController.handle(req, res);
});

router.put('/users', (req, res) => {
	return editUserController.handle(req, res);
});

router.delete('/users', (req, res) => {
	return deleteUserController.handle(req, res);
});

export { router }