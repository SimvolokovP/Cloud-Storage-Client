import { FC, useEffect, useState } from "react";
import { FilesService } from "../api/filesApi";
import { FileItem } from "../api/dto/files.dto";
import FileCard from "./FileCard";

const FilesList: FC = () => {
  const [files, setFiles] = useState<FileItem[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const data = await FilesService.getFiles();

      setFiles(data);
    };

    fetchFiles();
  }, []);

  return (
    <ul className="list">
      {files.map((item) => (
        <FileCard key={item.id} fileItem={item} />
      ))}
    </ul>
  );
};

export default FilesList;
