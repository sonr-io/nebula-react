import { MouseEventHandler } from "react";

export interface ButtonProps {
  id?: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  label: string; // label for the button
  styling: string; // css style string
  icon?: string;
  onClick?: MouseEventHandler | undefined;
}
