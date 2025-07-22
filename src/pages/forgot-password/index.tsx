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
import { IconCheck, IconX } from "@tabler/icons-react";

interface FormValues {
  email: string;
  newPassword: string;
  confirmPassword: string;
}

const ForgotPassword = () => {
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { onSubmit, getInputProps, reset } = useForm<FormValues>({
    initialValues: { email: "", newPassword: "", confirmPassword: "" },
    validate: yupSyncResolver(forgotPasswordSchema),
    validateInputOnChange: true,
  });

  const handleSubmit = async (values: FormValues) => {
    setError(null);
    setSuccess(null);

    try {
      const { data } = await api.tasks.getAll({
        params: { email: values.email },
      });

      if (data.length === 0) {
        setError("Email not found!");
        return;
      }

      const user = data[0];

      await api.users.patch({
        id: user.id,
        data: { password: values.newPassword },
      });

      setSuccess("Password updated successfully!");
      reset();
    } catch (err: any) {
      setError("Failed to reset password");
    }
  };

  return (
    <Center>
      <Box>
        {success && (
          <Notification
            icon={<IconCheck />}
            color="green"
            title="Success"
            mt="md"
          >
            {success}
          </Notification>
        )}

        {error && (
          <Notification icon={<IconX />} color="red" title="Error" mt="md">
            {error}
          </Notification>
        )}
        <form onSubmit={onSubmit(handleSubmit)}>
          <Stack>
            <TextInput
              label="Email"
              placeholder="Enter an email"
              {...getInputProps("email")}
            />
            <PasswordInput
              label="New Password"
              placeholder="Enter a new password"
              {...getInputProps("newPassword")}
            />
            <PasswordInput
              label="Confirm Password"
              placeholder="Re-enter the password"
              {...getInputProps("confirmPassword")}
            />
            <Button type="submit">Reset Password</Button>
          </Stack>
        </form>
      </Box>
    </Center>
  );
};

export default ForgotPassword;
