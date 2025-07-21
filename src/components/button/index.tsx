import {
  Button as MantineButton,
  type ButtonProps as MantineButtonProps,
} from "@mantine/core";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  [key: string]: any;
} & MantineButtonProps;

export const CustomButton = ({ children, ...props }: ButtonProps) => {
  return <MantineButton {...props}>{children}</MantineButton>;
};
