import { Box, Flex, Group, Anchor, Container } from "@mantine/core";

const PlainNavbar = () => {
  return (
    <Box bg="blue.6" py="sm">
      <Container size="xl">
        <Flex justify="space-between" align="center">
          <Anchor underline="never" href="/" c="white" fw={600} fz="xl">
            Taskboard
          </Anchor>

          <Group gap="md" visibleFrom="sm">
            <Anchor c="white" href="/login">
              Login
            </Anchor>
            <Anchor c="white" href="/register">
              Register
            </Anchor>
            <Anchor c="white" href="/forgot-password">
              Forgot Password
            </Anchor>
          </Group>
        </Flex>
      </Container>
    </Box>
  );
};

export default PlainNavbar;

/**
| Feature       | `Box`                     | `Stack`                          | `Group`                         |
| ------------- | ------------------------- | -------------------------------- | ------------------------------- |
| Layout        | No layout, just a wrapper | Vertical layout (column)         | Horizontal layout (row)         |
| Spacing       | Not automatic             | `spacing` between elements       | `spacing` between elements      |
| Align/Justify | N/A                       | `align`, `justify` (vertical)    | `align`, `justify` (horizontal) |
| Best for      | Custom container, styling | Stacking UI blocks top-to-bottom | Buttons, tags, controls inline  |

✅ Rule of Thumb
Use Box when you just need a styled container.

Use Stack when items go top to bottom.

Use Group when items go left to right.

 */
