export type User = {
  id: number;
  login: string;
  fio: string;
  mail: string;
  profile: string;
};

export type CreateUser = {
  login: string;
  password: string;
  fio: string;
  mail: string;  
};

export type UpdateUser = Partial<Omit<User, "id">>;

export type AuthUser = {
  login: string;
  password: string;
};

export type SignIn = {
  auth: boolean;
  token: string;
  user: User;
};
