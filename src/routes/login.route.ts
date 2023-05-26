import { Router } from 'express';
import loginValidation from '../middlewares/login.validation';
import loginController from '../controllers/login.controller';

const loginRoute = Router();

loginRoute.post('/login', loginValidation.loginValidation, loginController.Login);

export default loginRoute;