import { useState } from "react";
import Tabs from "../components/Tabs.js";
import LoginForm from "../components/LoginForm.js";
import RegisterForm from "../components/RegisterForm.js";

const AuthPage = () => {
  const [auth, setAuth] = useState<string>("login");

  return (
    <div>
      <Tabs
        onChange={setAuth}
        values={[
          { label: "Вход", value: "login" },
          { label: "Регистрация", value: "register" },
        ]}
      />
      {auth === "login" && <LoginForm />}
      {auth === "register" && <RegisterForm />}
    </div>
  );
};

export default AuthPage;
