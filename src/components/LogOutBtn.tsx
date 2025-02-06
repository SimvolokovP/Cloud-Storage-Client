import { AuthService } from "../api/authApi";

const LogOutBtn = () => {
  const handleClick = () => {
    if (confirm("Log out?")) {
      AuthService.logout();
    }
  };

  return <button onClick={handleClick}>Log Out</button>;
};

export default LogOutBtn;
