import { FormEvent, useState } from "react";
import { AuthService } from "../api/authApi";
import { RegisterFormDTO } from "../api/dto/users.dto";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [formData, setFormData] = useState<RegisterFormDTO>({
    email: "",
    password: "",
    fullName: "",
  });

  const navigate = useNavigate();

  const register = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      console.log(formData);
      const { token } = await AuthService.register(formData);
      alert("Успешно!");

      

      navigate("/");
    } catch (error) {
      console.warn(error);
      alert("Ошибка");
    }
  };

  return (
    <div>
      <h3>Register</h3>
      <form onSubmit={(e) => register(e)}>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Fullname"
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
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

export default RegisterForm;
