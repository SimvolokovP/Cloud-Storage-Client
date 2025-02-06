import { FC } from "react";
import { User } from "../api/dto/users.dto";

interface FilesControlProps {
  user: User | null;
  selectedIds: number[];
}

const FilesControl: FC<FilesControlProps> = ({ user, selectedIds }) => {
  return (
    <div className="control">
      <span>Hello, {user?.fullName}</span>
      <div style={{ display: "flex", gap: "16px" }}>
        <button>New File</button>
        <button disabled={!selectedIds.length}>
          Delete ({selectedIds.length})
        </button>
      </div>
      <div>
        <select>
          <option value="1">1</option>
          <option value="1">1</option>
        </select>
      </div>
    </div>
  );
};

export default FilesControl;
