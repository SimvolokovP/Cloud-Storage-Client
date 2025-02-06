import { useEffect, useState } from "react";
import { User } from "../api/dto/users.dto";
import { AuthService } from "../api/authApi";
import FilesList, { FileSelectType } from "../components/FilesList";
import FilesControl from "../components/FilesControl";
import { FileItem } from "../api/dto/files.dto";
import { FilesService } from "../api/filesApi";

const DashboardPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [files, setFiles] = useState<FileItem[]>([]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await AuthService.getMe();

      setUser(data);
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const fetchFiles = async () => {
      const data = await FilesService.getFiles();

      setFiles(data);
    };

    fetchFiles();
  }, []);

  const onFileSelect = (id: number, type: FileSelectType) => {
    if (type === "select") {
      setSelectedIds((prev) => [...prev, id]);
    } else {
      setSelectedIds((prev) => prev.filter((_id) => _id !== id));
    }
  };

  // const onClickRemove = () => {
  //   setSelectedIds([]);
  //   setFiles((prev) => prev.filter((file) => !selectedIds.includes(file.id)));
  //   Api.files.remove(selectedIds);
  // };

  return (
    <div className="page">
      <FilesControl selectedIds={selectedIds} user={user} />
      <FilesList files={files} onFileSelect={onFileSelect} />
    </div>
  );
};

export default DashboardPage;
