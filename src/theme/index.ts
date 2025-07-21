import {
  Button,
  createTheme,
  TextInput,
  localStorageColorSchemeManager,
  rem,
} from "@mantine/core";
import {
  primary,
  danger,
  dark,
  info,
  light,
  secondary,
  success,
  warning,
} from "./colors";

export const theme = createTheme({
  fontFamily: "Poppins, sans-serif",
  primaryColor: "primary",
  colors: {
    primary,
    secondary,
    success,
    danger,
    warning,
    info,
    light,
    dark,
  },
  defaultRadius: "sm",
  cursorType: "pointer",
  headings: {
    fontFamily: "Poppins, sans-serif",
    sizes: {
      h1: { fontSize: rem(36) },
      h2: { fontSize: rem(30) },
      h3: { fontSize: rem(24) },
    },
  },
  spacing: {
    xs: rem(8),
    sm: rem(12),
    md: rem(16),
    lg: rem(24),
    xl: rem(32),
  },
  components: {
    Button: Button.extend({
      defaultProps: {
        variant: "subtle",
        radius: "xl",
        size: "sm",
        color: "primary",
      },
      styles: {
        root: {
          fontWeight: 600,
          textTransform: "capitalize",
        },
      },
    }),
    TextInput: TextInput.extend({
      defaultProps: {
        variant: "default",
        size: "sm",
        radius: "md",
      },
      styles: (theme) => ({
        input: {
          borderColor: theme.colors.success[4],
          "&:focus": {
            borderColor: theme.colors.primary[6],
            boxShadow: `0 0 0 1px ${theme.colors.primary[1]}`,
          },
        },
        label: {
          fontWeight: 400,
          color: theme.colors.secondary[9],
        },
      }),
    }),
  },
});

export const colorSchemeManager = localStorageColorSchemeManager({
  key: "mantine-color-scheme",
});
