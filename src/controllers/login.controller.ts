import { Request, Response } from 'express';
import loginService from '../services/login.services';

const Login = async (req: Request, res: Response): Promise<Response> => {
  const { username, password } = req.body;

  const { status, data } = await loginService.Login(username, password);
  if (status === 'UNAUTHORIZED') {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
  if (status === 'SUCCESSFUL') {
    return res.status(200).json(data);
  }
  return res.status(500).json({ data });
};

export default { Login };