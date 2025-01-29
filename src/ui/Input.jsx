import { useController } from "react-hook-form";

const InputField = ({
  control,
  name,
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
        className={`w-full rounded-lg border p-3 focus:outline-none focus:ring-2 ${fieldError ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"}`}
      />
      {fieldError && (
        <p className="mt-2 text-sm text-red-500">{fieldError.message}</p>
      )}
    </div>
  );
};

export default InputField;
