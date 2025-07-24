import { useForm } from "@mantine/form";
import {
  Box,
  Stack,
  TextInput,
  PasswordInput,
  Button,
  Center,
  Notification,
} from "@mantine/core";
import { useState } from "react";
import { api } from "../../api";
import { yupSyncResolver } from "../../utils/helper";
import { forgotPasswordSchema } from "../../utils/validations";
import { ICONS } from "../../assets/icons";
import { usePageData } from "../../hooks/use-page-data";
import Icon from "../../assets/icons/icons";
import { apiAsyncHandler } from "../../utils/helper";

interface FormValues {
  email: string;
  newPassword: string;
  confirmPassword: string;
}

const ForgotPassword = () => {
  usePageData();
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { onSubmit, getInputProps, reset, key } = useForm<FormValues>({
    initialValues: { email: "", newPassword: "", confirmPassword: "" },
    validate: yupSyncResolver(forgotPasswordSchema),
    validateInputOnChange: true,
  });

  const handleSubmit = async (values: FormValues) => {
    setError(null);
    setSuccess(null);

    // 1. Find user by email
    const userRes = await apiAsyncHandler(
      () => api.users.getAll({ params: { email: values.email } }),
      () => setError("Failed to fetch user")
    );

    console.log("userRes: ", userRes);
    if (!userRes || !userRes.data || userRes.data.length === 0) {
      setError("Email not found!");
      return;
    }

    const user = userRes.data[0];

    // 2. Update password
    const patchRes = await apiAsyncHandler(
      () =>
        api.users.patch({
          id: user.id,
          data: { password: values.newPassword },
        }),
      () => setError("Failed to reset password")
    );

    if (patchRes) {
      setSuccess("Password updated successfully!");
      reset();
    }
  };

  return (
    <Center>
      <Box>
        {success && (
          <Notification
            icon={<Icon component={ICONS.IconCheck} stroke={1} />}
            color="green"
            title="Success"
            mt="md"
          >
            {success}
          </Notification>
        )}

        {error && (
          <Notification
            icon={<Icon component={ICONS.IconX} stroke={1} />}
            color="red"
            title="Error"
            mt="md"
          >
            {error}
          </Notification>
        )}
        <form onSubmit={onSubmit(handleSubmit)}>
          <Stack>
            <TextInput
              label="Email"
              placeholder="Enter an email"
              {...getInputProps("email")}
              key={key("email")}
            />
            <PasswordInput
              label="New Password"
              placeholder="Enter a new password"
              {...getInputProps("newPassword")}
              key={key("newPassword")}
            />
            <PasswordInput
              label="Confirm Password"
              placeholder="Re-enter the password"
              {...getInputProps("confirmPassword")}
              key={key("confirmPassword")}
            />
            <Button type="submit">Reset Password</Button>
          </Stack>
        </form>
      </Box>
    </Center>
  );
};

export default ForgotPassword;
