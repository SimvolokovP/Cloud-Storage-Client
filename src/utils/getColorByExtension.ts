const extColor = {
  pdf: "purple",
  xls: "green",
  xlsx: "green",
  doc: "blue",
  txt: "blue",
  png: "orange",
  jpg: "orange",
  jpeg: "orange",
  zip: "red",
} as const;

export type Extension = keyof typeof extColor;
export type Color = (typeof extColor)[Extension];

export const getColorByExtension = (ext: Extension): Color | undefined => {
  return extColor[ext];
};
