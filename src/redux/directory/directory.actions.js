import { directoryActionTypes } from "./directory.types";

export const updateSections = (sections) => ({
  type: directoryActionTypes.UPDATE_SECTIONS,
  payload: sections,
});
