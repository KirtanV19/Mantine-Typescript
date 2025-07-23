import { Box, Stack, NavLink } from "@mantine/core";
import Icon from "../../../assets/icons/icons";
import { ICONS } from "../../../assets/icons";

const AuthNavbar = () => {
  return (
    <Box>
      <Stack>
        <NavLink
          label="Tasks"
          leftSection={<Icon component={ICONS.IconListDetails} />}
        />
        <NavLink
          label="Users"
          leftSection={<Icon component={ICONS.IconUsers} />}
        />
      </Stack>
    </Box>
  );
};

export default AuthNavbar;
