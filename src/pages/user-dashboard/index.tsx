// table
// modal
import UserTask from "../user-task";
import { useDisclosure } from "@mantine/hooks";
import CustomModal from "../../components/confirm-modal";
import { Box } from "@mantine/core";

const UserDashboard = () => {
  const [opened, handlers] = useDisclosure(false);
  return (
    <Box>
      <CustomModal
        onClose={() => handlers.close()}
        opened={opened}
        title="Create a Task"
        content={<UserTask />}
        onOpen={() => handlers.open()}
      />
    </Box>
  );
};

export default UserDashboard;
