import { Box, Button, TextInput, PasswordInput, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { loginSchema } from "../../utils/validations";
import { yupSyncResolver } from "../../utils/helper";

const Login = () => {
  const { getInputProps, onSubmit } = useForm({
    initialValues: { email: "", password: "" },
    validate: yupSyncResolver(loginSchema),
    validateInputOnChange: true,
  });

  return (
    <Box>
      <form
        onSubmit={onSubmit((values) => {
          console.log(values);
        })}
      >
        <Stack>
          <TextInput
            label="Email"
            placeholder="Enter an email"
            {...getInputProps("email")}
          />
          <PasswordInput
            label="Password"
            placeholder="Enter a password"
            {...getInputProps("password")}
          />
          <Button type="submit">Login</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Login;
