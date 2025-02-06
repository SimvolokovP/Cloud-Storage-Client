import { Route, Routes } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import AuthPage from "../pages/AuthPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" Component={DashboardPage} />
      <Route path="/auth" Component={AuthPage} />
    </Routes>
  );
};

export default AppRouter;
