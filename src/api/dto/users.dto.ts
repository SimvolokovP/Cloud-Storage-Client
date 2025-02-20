export interface LoginFormDTO {
  email: string;
  password: string;
}

export interface RegisterFormDTO {
  email: string;
  password: string;
  fullName: string;
}

export interface LoginResponseDTO {
  token: string;
}

export interface User {
  id: number;
  email: string;
  fullName: string;
}

