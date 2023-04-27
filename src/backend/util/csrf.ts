import csrf from "csrf";

const _csrf = new csrf({});

export type Token = {
  secret: string;
  token: string;
};
export const csrfVerify = (secret: string, token: string) => {
  return _csrf.verify(secret, token);
};

const csrfCreate = async (secret: string) => {
  return _csrf.create(secret);
};

const csrfCreateSecret = () => {
  return _csrf.secret();
};

export const csfrGenerate = async (): Promise<Token> => {
  const secret = await csrfCreateSecret();
  const token = await csrfCreate(secret);

  const newToken: Token = { token, secret };

  return newToken;
};
