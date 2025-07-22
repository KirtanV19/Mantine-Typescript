import * as yup from "yup";
import { VALIDATION_MESSAAGE as message } from "../constants";
import { regex } from "./regex";
import { ROLES } from "../constants";
const { hasDigit, hasLowercaseLetter, hasSpecialChar, hasUppercaseLetter } =
  regex;

const {
  passwordDigit,
  passwordLength,
  passwordLower,
  passwordSpecial,
  passwordUpper,
  required,
  roleRequired,
  invalid,
} = message;

// Register Schema
export const registerSchema = yup.object({
  name: yup.string().required(required("name")),
  email: yup.string().email(invalid("email")).required(required("email")),
  password: yup
    .string()
    .required(required("password"))
    .min(6, passwordLength)
    .matches(hasLowercaseLetter, passwordLower)
    .matches(hasUppercaseLetter, passwordUpper)
    .matches(hasDigit, passwordDigit)
    .matches(hasSpecialChar, passwordSpecial),
  role: yup
    .string()
    .oneOf(Object.values(ROLES), roleRequired)
    .required(required("role")),
});
