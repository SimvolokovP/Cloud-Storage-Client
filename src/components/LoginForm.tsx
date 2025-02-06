import { FormEvent, useState } from "react";
import { AuthService } from "../api/authApi";
import { LoginFormDTO } from "../api/dto/users.dto";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState<LoginFormDTO>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const login = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      console.log(formData);
      await AuthService.login(formData);

      alert("Успешно!");

      navigate("/");
    } catch (error) {
      console.warn(error);
      alert("Ошибка");
    }
  };

  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={(e) => login(e)}>
        <input
          type="mail"
          placeholder="Email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <button type="submit">Ok</button>
      </form>
    </div>
  );
};

export default LoginForm;
