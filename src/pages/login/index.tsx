import {
  Center,
  Button,
  TextInput,
  PasswordInput,
  Stack,
  Notification,
  Box,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { loginSchema } from "../../utils/validations";
import { apiAsyncHandler, yupSyncResolver } from "../../utils/helper";
import { usePageData } from "../../hooks/use-page-data";
import { api } from "../../api";
import useAuth from "../../auth/use-auth";
import { useState } from "react";
import Icon from "../../assets/icons/icons";
import { ICONS } from "../../assets/icons";
import { AUTH_MESSAGES } from "../../utils/constants";

interface FormValues {
  email: string;
  password: string;
}

const Login = () => {
  usePageData();
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth() as any;

  const { getInputProps, onSubmit, key } = useForm({
    initialValues: { email: "", password: "" },
    validate: yupSyncResolver(loginSchema),
    validateInputOnChange: true,
  });

  const handleSubmit = async (values: FormValues) => {
    console.log("values", values);

    const response = await apiAsyncHandler(() =>
      api.users.getAll({ params: { email: values.email } })
    );
    console.log("response", response);

    if (!response || !response?.data || response?.data?.length === 0) {
      setError(AUTH_MESSAGES.notFound("email"));
      return;
    }

    if (response?.data[0]?.email === values.email) {
      setSuccess(AUTH_MESSAGES.login);
      login();
    }
  };

  return (
    <Center>
      <Box>
        {success && (
          <Notification
            icon={<Icon component={ICONS.IconCheck} stroke={1} />}
            color="green"
            title={AUTH_MESSAGES.login}
            mt="md"
          >
            {success}
          </Notification>
        )}
        {error && (
          <Notification
            icon={<Icon component={ICONS.IconX} stroke={1} />}
            color="red"
            title={AUTH_MESSAGES.notFound("email")}
            mt="md"
          >
            {error}
          </Notification>
        )}
        <form onSubmit={onSubmit(handleSubmit)}>
          <Stack>
            <TextInput
              withAsterisk
              label="Email"
              placeholder="Enter an email"
              {...getInputProps("email")}
              key={key("email")}
            />
            <PasswordInput
              withAsterisk
              label="Password"
              placeholder="Enter a password"
              {...getInputProps("password")}
              key={key("password")}
            />
            <Button type="submit">Login</Button>
          </Stack>
        </form>
      </Box>
    </Center>
  );
};

export default Login;
