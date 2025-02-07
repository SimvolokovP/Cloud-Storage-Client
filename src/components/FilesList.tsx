import { FC, useRef } from "react";

import { FileItem } from "../api/dto/files.dto";
import FileCard from "./FileCard";
import Selecto from "react-selecto";

interface FilesListProps {
  onFileSelect: (id: number, type: FileSelectType) => void;
  files: FileItem[];
}

export type FileSelectType = "select" | "unselect";

const FilesList: FC<FilesListProps> = ({ onFileSelect, files }) => {
  const formRef = useRef(null);

  return (
    <div ref={formRef}>
      {files.length ? (
        <ul className="list">
          {files.map((item) => (
            <FileCard fileItem={item} key={item.id} />
          ))}
        </ul>
      ) : (
        <div>Нет сохраненных файлов</div>
      )}

      <Selecto
        container={formRef.current}
        selectableTargets={[".card"]}
        selectByClick
        hitRate={10}
        selectFromInside
        toggleContinueSelect={["shift"]}
        continueSelect={false}
        onSelect={(e) => {
          e.added.forEach((el) => {
            el.classList.add("active");
            onFileSelect(Number(el.dataset["id"]), "select");
          });
          e.removed.forEach((el) => {
            el.classList.remove("active");
            onFileSelect(Number(el.dataset["id"]), "unselect");
          });
        }}
      />
    </div>
  );
};

export default FilesList;
