// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   location: "",
//   vehicleFeatures: [],
//   vehicleType: [],
// };

// const filtersSlice = createSlice({
//   name: "filters",
//   initialState,
//   reducers: {
//     setFilters: (state, action) => {
//       return { ...state, ...action.payload };
//     },
//     toggleFeature: (state, action) => {
//       const feature = action.payload;
//       state.vehicleFeatures.includes(feature)
//         ? state.vehicleFeatures.splice(
//             state.vehicleFeatures.indexOf(feature),
//             1,
//           )
//         : state.vehicleFeatures.push(feature);
//     },
//     toggleVehicleType: (state, action) => {
//       const type = action.payload;
//       state.vehicleType.includes(type)
//         ? state.vehicleType.splice(state.vehicleType.indexOf(type), 1)
//         : state.vehicleType.push(type);
//     },
//   },
// });

// export const { setFilters, toggleFeature, toggleVehicleType } =
//   filtersSlice.actions;
// export default filtersSlice.reducer;
