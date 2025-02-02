// import { createSelector } from "@reduxjs/toolkit";
// import {
//   selectLocationFilter,
//   selectEquipmentFilter,
//   selectTypeFilter,
// } from "../filters/selectors";

export const selectCampers = (state) => state.campers.campersItem;
export const selectByIdCamper = (state) => state.campers.camper || {};
// export const selectIsCamperArr = (state) => state.campers.items;

export const selectIsLoading = (state) => state.campers.loading;
export const selectIsError = (state) => state.campers.error;

// export const selectFilteredTracks = createSelector(
//   [selectTracks, selectLocationFilter, selectEquipmentFilter, selectTypeFilter],
//   (campers, filter) => {
//     return campers.filter((camper) =>
//       camper.name.toLowerCase().includes(filter.toLowerCase()),
//     );
//   },
// );
