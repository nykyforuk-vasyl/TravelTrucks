import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";

// import { login } from "@/redux/auth/operations";
// import { useAppDispatch } from "@/redux/hooks";

import validationSchema from "./ValidationSchema";
import Input from "../../../ui/Input";

const ReservationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  // const dispatch = useAppDispatch();
  // const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Форма відправлена:", data);
  };

  // const onSubmit = async (data) => {
  //   const result = await dispatch(login(data));

  //   if (result.meta.requestStatus === "fulfilled") {
  //     navigate("/tracker");
  //   } else {
  //     console.error("Registration failed", result.payload);
  //   }
  // };

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <Input
        control={control}
        name="name"
        placeholder="Name*"
        error={errors.name}
      />

      <Input
        control={control}
        name="email"
        type="email"
        placeholder="Email*"
        error={errors.email}
      />

      <Input
        control={control}
        name="bookingDate"
        type="date"
        placeholder="Booking date*"
        error={errors.bookingDate}
      />

      <div className="mb-4">
        <textarea
          {...register("comment")}
          placeholder="Comment"
          className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-red-500 py-3 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        Send
      </button>
    </form>
  );
};

export default ReservationForm;
