import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import validationSchema from "./ValidationSchema";
import Input from "../../ui/Input";

const ReservationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log("Форма відправлена:", data);

    iziToast.success({
      title: "Success",
      message: "Your reservation has been successfully submitted!",
      position: "topRight",
      timeout: 3000,
    });
  };

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <Input
        control={control}
        name="name"
        placeholder="Name*"
        error={errors.name}
        className="rounded-3 bg-darkWhite"
      />

      <Input
        control={control}
        name="email"
        type="email"
        placeholder="Email*"
        error={errors.email}
        className="rounded-3 bg-darkWhite"
      />

      <Input
        control={control}
        name="bookingDate"
        type="date"
        placeholder="Booking date*"
        error={errors.bookingDate}
        className="rounded-3 bg-darkWhite"
      />

      <div className="mb-4">
        <textarea
          {...register("comment")}
          placeholder="Comment"
          className={`h-[118px] w-full rounded-[10px] bg-darkWhite p-[18px] placeholder:text-grey focus:outline-none ${errors.comment ? "border-red focus:ring-red" : "focus:border-darkWhite"}`}
        />
        {errors.comment && (
          <p className="mt-2 text-sm text-red">{errors.comment.message}</p>
        )}
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="my-auto mt-2 rounded-full bg-red px-[63px] py-4 text-base text-white hover:bg-darkRed focus:outline-none focus:ring-darkRed"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ReservationForm;
