import { FC } from "react";
import { FileItem } from "../api/dto/files.dto";
import { getExtension } from "../utils/getExtension";
import { getColorByExtension } from "../utils/getColorByExtension";

interface FileCardProps {
  fileItem: FileItem;
}

const FileCard: FC<FileCardProps> = ({ fileItem }) => {
  const ext = getExtension(fileItem.filename);

  const isImage = ext === "jpeg" || ext === "png" || ext === "jpg";

  const imageUrl =
    ext && isImage ? "http://localhost:5000/uploads/" + fileItem.filename : "";

  const color = getColorByExtension(ext);

  return (
    <li className="card">
      {isImage ? (
        <img src={imageUrl} alt={fileItem.filename} />
      ) : (
        <img src="/file_icon.svg" alt="icon" />
      )}
      <div style={{ backgroundColor: color }}>{fileItem.originalName}</div>
    </li>
  );
};

export default FileCard;
