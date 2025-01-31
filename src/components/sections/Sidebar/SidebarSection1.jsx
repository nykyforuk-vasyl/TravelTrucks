// import { useSelector, useDispatch } from "react-redux";
// import { useForm } from "react-hook-form";
// import {
//   setFilters,
//   toggleFeature,
//   toggleVehicleType,
// } from "../../../redux/filters/operations";

// import Input from "../../../ui/Input";

// const SidebarSection = () => {
//   const dispatch = useDispatch();
//   const filters = useSelector((state) => state.filters);
//   const { control, handleSubmit } = useForm({
//     defaultValues: {
//       location: filters.location || "",
//     },
//   });

//   const onSubmit = (data) => {
//     dispatch(setFilters({ ...filters, location: data.location }));
//     console.log("Filters Applied:", filters);
//   };

//   return (
//     <aside className="rounded-lg bg-white p-4 shadow-lg">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         {/* Локація */}
//         <label className="mb-2 block text-gray-700">Location</label>
//         <Input control={control} name="location" placeholder="Enter city" />
//       </form>
//     </aside>
//   );
// };

// export default SidebarSection;
