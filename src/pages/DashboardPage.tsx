import { useEffect, useState } from "react";
import { User } from "../api/dto/users.dto";
import { AuthService } from "../api/authApi";
import FilesList, { FileSelectType } from "../components/FilesList";
import FilesControl from "../components/FilesControl";
import { FileItem } from "../api/dto/files.dto";
import { FilesService, FileType } from "../api/filesApi";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [files, setFiles] = useState<FileItem[]>([]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const [filesType, setFilesType] = useState<FileType>("all");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await AuthService.getMe();

        setUser(data);
      } catch (error) {
        console.warn(error);
        await AuthService.logout();
        navigate("/auth");
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const data = await FilesService.getFiles(filesType);

        setFiles(data);
      } catch (error) {
        console.warn(error);
      }
    };

    fetchFiles();
  }, [filesType]);

  const onFileSelect = (id: number, type: FileSelectType) => {
    if (type === "select") {
      setSelectedIds((prev) => [...prev, id]);
    } else {
      setSelectedIds((prev) => prev.filter((_id) => _id !== id));
    }
  };

  const onClickRemove = () => {
    setSelectedIds([]);
    setFiles((prev) => prev.filter((file) => !selectedIds.includes(file.id)));
    FilesService.remove(selectedIds);
  };

  return (
    <div className="page">
      <FilesControl onRemove={onClickRemove} filesType={filesType} onTypeChange={setFilesType} selectedIds={selectedIds} user={user} />
      <FilesList files={files} onFileSelect={onFileSelect} />
    </div>
  );
};

export default DashboardPage;
