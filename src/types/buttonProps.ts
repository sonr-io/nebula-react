import { MouseEventHandler } from "react";

export interface ButtonProps {
  label: string; // label for the button
  styling: string; // css style string
  icon?: string;
  onClick?: MouseEventHandler | undefined;
}
