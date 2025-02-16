import { yupResolver } from "@hookform/resolvers/yup";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { enGB } from "date-fns/locale";
import { useForm, Controller } from "react-hook-form";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import validationSchema from "./ValidationSchema";
import Input from "../../ui/Input";
import "./datepicker.css";

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

  registerLocale("enGB", enGB);

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

      <div className="relative mb-4 flex flex-col">
        <Controller
          name="bookingDate"
          control={control}
          render={({ field }) => (
            <DatePicker
              selected={field.value ? new Date(field.value) : null}
              onChange={(date) =>
                field.onChange(date ? date.toISOString() : "")
              }
              locale="enGB"
              type="number"
              dateFormat="dd.MM.yyyy"
              placeholderText="Booking date*"
              className={`w-full rounded-[12px] bg-darkWhite p-3 text-base text-sm placeholder:text-grey focus:outline-none md:p-[18px] md:placeholder:text-base ${
                errors.bookingDate
                  ? "border-red focus:ring-red"
                  : "focus:border-darkWhite"
              }`}
              calendarStartDay={1}
              formatWeekDay={(day) => day.toUpperCase().slice(0, 3)}
              minDate={new Date()}
            />
          )}
        />
        {errors.bookingDate && (
          <p className="mt-2 text-sm text-red">{errors.bookingDate.message}</p>
        )}
      </div>

      <div className="mb-4">
        <textarea
          {...register("comment")}
          placeholder="Comment"
          className={`h-[100px] w-full resize-none rounded-[10px] bg-darkWhite p-[18px] placeholder:text-grey focus:outline-none md:h-[118px] ${errors.comment ? "border-red focus:ring-red" : "focus:border-darkWhite"}`}
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
