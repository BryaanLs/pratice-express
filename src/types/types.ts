export type JwtResponse = {
  token: string;
  type: "Bearer";
  expiresAt?: string;
  refreshToken?: string;
};

export type JwtPayload = {
  name: string;
  lastname: string;
  cpf: number;
  phone: number;
  email: string;
};
