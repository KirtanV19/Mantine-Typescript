import { Paper, Title, Text, Stack, Box } from "@mantine/core";

const WelcomeUser = () => {
  return (
    <Paper
      radius="md"
      p="xl"
      shadow="xl"
      withBorder
      style={{
        background: "linear-gradient(135deg, #f8fafc, #e2e8f0)", // softer gray-blue gradient
      }}
    >
      <Stack gap="xs">
        <Box>
          <Title
            order={2}
            style={{
              background: "linear-gradient(to right, #0ea5e9, #6366f1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 700,
            }}
          >
            Welcome back!
          </Title>
        </Box>
        <Text size="sm" c="dimmed">
          We're glad to see you again. Use the sidebar to manage your tasks or
          create something new!
        </Text>
      </Stack>
    </Paper>
  );
};

export default WelcomeUser;
