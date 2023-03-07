import { object, string, ref } from "yup";

const validations = object({
  email: string().email("Please enter a valid email.").required("Email is a required field"),
  password: string().min(5, "Password must containt at least 5 characters").required("Password is a required field"),
  passwordConfirm: string().oneOf([ref("password")]).required("This field is required")
});

export default validations;