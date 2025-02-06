import { destroyCookie, setCookie } from "nookies";
import { host } from "./api";
import {
  LoginFormDTO,
  LoginResponseDTO,
  RegisterFormDTO,
} from "./dto/users.dto";

export class AuthService {
  static async login(dto: LoginFormDTO): Promise<LoginResponseDTO> {
    console.log(dto);
    const { data } = await host.post("/auth/login", dto);

    setCookie(null, "_token", data, {
      path: "/",
    });

    return data;
  }

  static async register(dto: RegisterFormDTO): Promise<LoginResponseDTO> {
    console.log(dto);
    const { data } = await host.post("/auth/register", dto);

    setCookie(null, "_token", data, {
      path: "/",
    });

    return data;
  }

  static async logout() {
    await destroyCookie(null, "_token", { path: "/" });
    window.location.reload();
  }
}
