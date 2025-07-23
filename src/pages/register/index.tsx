import {
  TextInput,
  Button,
  PasswordInput,
  Center,
  Radio,
  Group,
  Stack,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { registerSchema } from "../../utils/validations";
import { yupSyncResolver } from "../../utils/helper";
import { ROLES } from "../../utils/constants";

const Register = () => {
  const { getInputProps, onSubmit, key } = useForm({
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
    <Center>
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
            key={key("name")}
          />
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
          <Radio.Group
            label="Select your role"
            withAsterisk
            {...getInputProps("role")}
            key={key("role")}
          >
            <Group>
              <Radio value={ROLES.ADMIN} label="Admin" />
              <Radio value={ROLES.USER} label="User" />
            </Group>
          </Radio.Group>
          <Button type="submit">Register</Button>
        </Stack>
      </form>
    </Center>
  );
};

export default Register;
