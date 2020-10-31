import { createSelector } from "reselect";

const selectDirectory = (state) => state.directory;

export const selectDirectoryReducer = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
