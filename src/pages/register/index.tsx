import {
  TextInput,
  Button,
  PasswordInput,
  Box,
  Radio,
  Group,
  Stack,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { registerSchema } from "../../utils/validations";
import { yupSyncResolver } from "../../utils/helper";
import { ROLES } from "../../utils/constants";

const Register = () => {
  const { getInputProps, onSubmit } = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      role: "user",
    },
    validate: yupSyncResolver(registerSchema),
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
            withAsterisk
            label="Name"
            placeholder="Enter a name"
            {...getInputProps("name")}
          />
          <TextInput
            withAsterisk
            label="Email"
            placeholder="Enter an email"
            {...getInputProps("email")}
          />
          <PasswordInput
            withAsterisk
            label="Password"
            placeholder="Enter a password"
            {...getInputProps("password")}
          />
          <Radio.Group
            label="Select your role"
            withAsterisk
            {...getInputProps("role")}
          >
            <Group>
              <Radio value={ROLES.ADMIN} label="Admin" />
              <Radio value={ROLES.USER} label="User" />
            </Group>
          </Radio.Group>
          <Button type="submit">Register</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Register;
