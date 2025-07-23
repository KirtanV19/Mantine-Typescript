import { Box, Stack, NavLink } from "@mantine/core";
import { ICONS } from "../../../assets/icons";
import Icon from "../../../assets/icons/icons";

const PrivateNavbar = () => {
  return (
    <Box>
      <Stack>
        <NavLink
          label="Dashboard"
          leftSection={<Icon component={ICONS.IconDashboard} />}
        />
      </Stack>
    </Box>
  );
};

export default PrivateNavbar;
