import { ChangeEvent, FC } from "react";
import { User } from "../api/dto/users.dto";
import { FileType } from "../api/filesApi";

interface FilesControlProps {
  user: User | null;
  selectedIds: number[];
  onTypeChange: (e: FileType) => void;
  filesType: FileType;
  onRemove: () => void;
}

const FilesControl: FC<FilesControlProps> = ({
  user,
  selectedIds,
  onTypeChange,
  filesType,
  onRemove,
}) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (
      e.target.value === "all" ||
      e.target.value === "photos" ||
      e.target.value === "trash"
    ) {
      onTypeChange(e.target.value);
    }
  };

  const handleRemove = () => {
    if (confirm(`Remove ${selectedIds.length} files?`)) {
      onRemove();
    }
  };

  return (
    <div className="control">
      <span>Hello, {user?.fullName}</span>
      <div style={{ display: "flex", gap: "16px" }}>
        {filesType !== "trash" && (
          <>
            {" "}
            <button>New File</button>
            <button disabled={!selectedIds.length} onClick={handleRemove}>
              Delete ({selectedIds.length})
            </button>
          </>
        )}
      </div>
      <div>
        <select onChange={(e) => handleChange(e)}>
          <option value="all">All files</option>
          <option value="photos">photos</option>
          <option value="trash">trash</option>
        </select>
      </div>
    </div>
  );
};

export default FilesControl;
