import { useEffect, useState } from "react";
import { User } from "../api/dto/users.dto";
import { AuthService } from "../api/authApi";
import FilesList from "../components/FilesList";

const DashboardPage = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await AuthService.getMe();

      setUser(data);
    };

    fetchUser();
  }, []);

  return (
    <div className="page">
      <div>Hello, {user?.fullName}</div>
      <FilesList />
    </div>
  );
};

export default DashboardPage;
