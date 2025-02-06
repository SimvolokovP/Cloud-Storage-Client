import { useState } from "react";
import Tabs from "../components/Tabs.js";
import LoginForm from "../components/LoginForm.js";
import RegisterForm from "../components/RegisterForm.js";

const AuthPage = () => {
  const [auth, setAuth] = useState<string>("login");

  return (
    <div
      className="page"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{ padding: "10px 0", display: "flex", justifyContent: "center" }}
      >
        <Tabs
          onChange={setAuth}
          values={[
            { label: "Вход", value: "login" },
            { label: "Регистрация", value: "register" },
          ]}
        />
      </div>
      {auth === "login" && <LoginForm />}
      {auth === "register" && <RegisterForm />}
    </div>
  );
};

export default AuthPage;
