import { destroyCookie, setCookie } from "nookies";
import { authHost, host } from "./api";
import { LoginFormDTO, RegisterFormDTO, User } from "./dto/users.dto";
import { jwtDecode } from "jwt-decode";

export class AuthService {
  static async login(dto: LoginFormDTO): Promise<User> {
    console.log(dto);
    const { data } = await host.post("/auth/login", dto);

    console.log(data);

    setCookie(null, "_token", data.token, {
      path: "/",
    });

    return jwtDecode(data.token);
  }

  static async register(dto: RegisterFormDTO): Promise<User> {
    console.log(dto);
    const { data } = await host.post("/auth/register", dto);

    setCookie(null, "_token", data.token, {
      path: "/",
    });

    return jwtDecode(data.token);
  }

  static async logout() {
    await destroyCookie(null, "_token", { path: "/" });
    window.location.reload();
  }

  static async getMe(): Promise<User> {
    const { data } = await authHost.get("/users/me");

    return data;
  }
}
