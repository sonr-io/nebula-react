import { MouseEventHandler } from "react";

export type ButtonSizes = 'lg' | 'md' | 'sm';
export interface ButtonProps {
  id?: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  size?: ButtonSizes;
  label: string; // label for the button
  styling: string; // css style string
  icon?: string;
  onClick?: MouseEventHandler | undefined;
}
