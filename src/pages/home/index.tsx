import { Box, Center, Title } from "@mantine/core";
// import { useMantineTheme } from "@mantine/core";

const Home = () => {
  // const theme = useMantineTheme();
  return (
    <Box
      style={{
        background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
        padding: "2rem",
        borderRadius: "10px",
      }}
    >
      <Center>
        <Title order={2} size="h2">
          Taskboard
        </Title>
      </Center>
    </Box>
  );
};

export default Home;
