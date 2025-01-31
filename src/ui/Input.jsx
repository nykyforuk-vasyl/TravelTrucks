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
        className={`w-full border p-3 focus:outline-none focus:ring-2 ${className} ${fieldError ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"}`}
      />
      {fieldError && (
        <p className="text-red-500 mt-2 text-sm">{fieldError.message}</p>
      )}
    </div>
  );
};

export default Input;
