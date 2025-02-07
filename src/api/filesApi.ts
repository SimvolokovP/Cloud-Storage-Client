import { authHost } from "./api";
import { FileItem } from "./dto/files.dto";

export type FileType = "all" | "photos" | "trash";

export class FilesService {
  static async getFiles(type: FileType = "all"): Promise<FileItem[]> {
    const { data } = await authHost.get("/files?type=" + type);

    return data;
  }

  static remove(ids: number[]): Promise<void> {
    return authHost.delete("/files?ids=" + ids);
  }
}
