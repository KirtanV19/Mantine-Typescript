import { Box, Group, NavLink } from "@mantine/core";
import {
  IconBrandSlack,
  IconHome,
  IconLogin,
  IconRegistered,
  IconLockPassword,
} from "@tabler/icons-react";

const Navbar = () => {
  return (
    <Box>
      <IconBrandSlack stroke={1} />
      <Group gap="md" justify="flex-end">
        <NavLink label="Home" leftSection={<IconHome size={16} />} />
        <NavLink label="Login" leftSection={<IconLogin size={16} />} />
        <NavLink label="Regsiter" leftSection={<IconRegistered size={16} />} />
        <NavLink
          label="Forgot Password"
          leftSection={<IconLockPassword size={16} />}
        />
      </Group>
    </Box>
  );
};

export default Navbar;
