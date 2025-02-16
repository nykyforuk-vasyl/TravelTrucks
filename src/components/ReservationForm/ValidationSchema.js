import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters long"),

  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email address"),

  bookingDate: yup.date().required("Booking date is required").nullable(),

  comment: yup.string().max(500, "Comment can't be longer than 500 characters"),
});

export default validationSchema;
