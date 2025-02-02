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
        className="rounded-[10px] bg-darkWhite"
      />

      <Input
        control={control}
        name="email"
        type="email"
        placeholder="Email*"
        error={errors.email}
        className="rounded-[10px] bg-darkWhite"
      />

      <Input
        control={control}
        name="bookingDate"
        type="date"
        placeholder="Booking date*"
        error={errors.bookingDate}
        className="rounded-[10px] bg-darkWhite"
      />

      <div className="mb-4">
        <textarea
          {...register("comment")}
          placeholder="Comment"
          className="w-full rounded-lg border border-gray-300 bg-darkWhite p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="bg-red-500 hover:bg-red-600 focus:ring-red-500 w-full rounded-lg py-3 text-white focus:outline-none focus:ring-2"
      >
        Send
      </button>
    </form>
  );
};

export default ReservationForm;
