import { useEffect } from "react";
import AppRouter from "./router/AppRouter";
import nookies from "nookies";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const cookies = nookies.get();

    if (!cookies._token) {
      navigate("/auth");
    }
  }, []);

  return (
    <>
      {location.pathname !== "/auth" && <Header />}
      <main>
        <AppRouter />
      </main>
    </>
  );
}

export default App;
