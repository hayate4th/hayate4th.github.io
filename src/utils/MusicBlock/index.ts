import { baseClass } from "../../components/MusicBlock";

export const getBackgroundColorFromClassName = (className: string): string => {
  if (className.startsWith(baseClass)) {
    return className.split("-")[2];
  }
  return "white";
};
