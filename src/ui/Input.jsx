import { useController } from "react-hook-form";

const Input = ({
  control,
  name,
  className,
  type = "text",
  placeholder,
  ...props
}) => {
  const {
    field,
    fieldState: { error: fieldError },
  } = useController({ name, control });

  return (
    <div className="mb-4">
      <input
        {...field}
        type={type}
        placeholder={placeholder}
        {...props}
        className={`focus:border-1 w-full rounded-[12px] border border-silver p-[18px] text-base placeholder:text-grey focus:outline-none ${className} ${fieldError ? "border-red focus:ring-red" : "focus:border-darkWhite"}`}
      />
      {fieldError && (
        <p className="mt-2 text-sm text-red">{fieldError.message}</p>
      )}
    </div>
  );
};

export default Input;
