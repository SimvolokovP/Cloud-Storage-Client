import { Extension } from "./getColorByExtension";

export const getExtension = (filename: string) => {
  return filename.split(".").pop() as Extension;
};
