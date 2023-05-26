import JWT from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;

if (!secret) {
  throw new Error('Falta Secret!');
}

type TokenPayload = {
  username: string | undefined,
  password: string | undefined,
};

const JwtSign = (payload: TokenPayload): string => {
  const token = JWT.sign(payload, secret);
  return token;
};

export default { JwtSign };