import { Center, Button, TextInput, PasswordInput, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { loginSchema } from "../../utils/validations";
import { yupSyncResolver } from "../../utils/helper";

const Login = () => {
  const { getInputProps, onSubmit, key } = useForm({
    initialValues: { email: "", password: "" },
    validate: yupSyncResolver(loginSchema),
    validateInputOnChange: true,
  });

  return (
    <Center>
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
            key={key("email")}
          />
          <PasswordInput
            label="Password"
            placeholder="Enter a password"
            {...getInputProps("password")}
            key={key("password")}
          />
          <Button type="submit">Login</Button>
        </Stack>
      </form>
    </Center>
  );
};

export default Login;
