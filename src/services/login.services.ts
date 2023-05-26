import bcrypt from 'bcryptjs';
import { ServerResponse } from '../types/ServerResponse';
import UserModel from '../database/models/user.model';
import JWT from '../utils/jwt';

type LoginService = ServerResponse<{ token: string }>;

const Login = async (username: string, password: string): Promise<LoginService> => {
  const user = await UserModel.findOne({ where: { username } });
  if (!user || !bcrypt.compareSync(password, user.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' },
    };
  }
  const token = await JWT.JwtSign({ 
    username: user?.dataValues.username,
    password: user?.dataValues.password,
  });
  return {
    status: 'SUCCESSFUL',
    data: {
      token,
    },
  };
};

export default { Login };