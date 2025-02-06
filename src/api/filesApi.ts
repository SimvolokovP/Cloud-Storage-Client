import { authHost } from "./api";
import { FileItem } from "./dto/files.dto";

export class FilesService {
  static async getFiles(): Promise<FileItem[]> {
    const { data } = await authHost.get("/files");

    return data;
  }
}
