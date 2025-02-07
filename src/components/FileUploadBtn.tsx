import { FC, useRef, useState } from "react";
import { FilesService } from "../api/filesApi";

interface FileUploadBtnProps {}

const FileUploadBtn: FC<FileUploadBtnProps> = () => {
  const [filesList, setFilesList] = useState<File | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFilesList(e.target.files[0]);
    }
  };

  const uploadFile = async () => {
    try {
      if (filesList) {
        await FilesService.uploadFile(filesList);

        alert("File is saved!");

        setFilesList(null);

        window.location.reload();
      } else {
        alert("Select a file!");
      }
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <button onClick={handleClick}>
        <div>{filesList ? "File Selected" : "Upload"}</div>
        <input
          ref={inputRef}
          className="visually-hidden"
          type="file"
          onChange={(e) => handleFileChange(e)}
        />
      </button>
      <button onClick={uploadFile} disabled={!filesList}>
        Save
      </button>
    </div>
  );
};

export default FileUploadBtn;
