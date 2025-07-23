import { capitalize } from "../helper";

export const ROLES = {
  ADMIN: "admin",
  USER: "user",
};

export const APP_TITLE = "Taskboard";

export const VALIDATION_MESSAAGE = {
  required: (text: string) => `${capitalize(text)} is required`,
  invalid: (text: string) => `${capitalize(text)} invalid`,
  passwordLength: "Password should be at least 6 characters.",
  passwordLower: "Must contain at least one lowercase letter",
  passwordUpper: "Must contain at least one uppercase letter",
  passwordDigit: "Must contain at least one number",
  passwordSpecial: "Must contain at least one special character",
  roleRequired: "Please select a role",
  passwordMatch: "Passwords must match",
};

export const taskSelection = [
  {
    label: "Pending",
    value: "pending",
  },
];
