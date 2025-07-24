import {
  Button,
  createTheme,
  TextInput,
  localStorageColorSchemeManager,
  rem,
  PasswordInput,
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
    xs: rem(12),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(20),
  },
  components: {
    Button: Button.extend({
      defaultProps: {
        variant: "filled",
        radius: "md",
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
        input: {},
        label: {
          fontWeight: 400,
          color: theme.colors.secondary[9],
        },
      }),
    }),
    PasswordInput: PasswordInput.extend({
      defaultProps: {
        variant: "default",
        size: "sm",
        radius: "md",
      },
      styles: (theme) => ({
        input: {
          borderColor: theme.colors.secondary[0],

          // transition: "border-color 0.2s ease",

          // "&:hover": {
          //   borderColor: theme.colors.warning[7],
          // },

          // "&:focus": {
          //   borderColor: `${theme.colors.success[6]} !important`,
          //   boxShadow: `0 0 0 1px ${theme.colors.success[4]}`,
          // },
        },
        label: {
          fontWeight: 400,
          color: theme.colors.secondary[9],
          fontSize: theme.fontSizes.sm,
        },
        // innerInput: {
        //   borderColor: theme.colors.success[3],
        //   "&:focus": {
        //     borderColor: theme.colors.success[7],
        //   },
        //   "&:hover": {
        //     borderColor: theme.colors.warning[9],
        //   },
        // },
        error: {
          fontSize: theme.fontSizes.xs,
          color: theme.colors.danger[6],
        },
        visibilityToggle: {
          color: theme.colors.secondary[4],
        },
      }),
    }),
  },
});

export const colorSchemeManager = localStorageColorSchemeManager({
  key: "mantine-color-scheme",
});
