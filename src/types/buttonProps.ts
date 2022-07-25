import { MouseEventHandler, ReactElement } from "react";
import { IconNames, IconTypes } from "./iconProps";

export type ButtonSize = 'lg' | 'md' | 'sm';
export type ButtonSkin = 'primary' | 'secondary' | 'subtle' | 'transparent';
export interface ButtonProps {
  id?: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  size?: ButtonSize;
  skin?: ButtonSkin;
  disabled?: boolean;
  styling?: string; // css style string
  label: string; // label for the button
  iconName?: IconNames;
  iconType?: IconTypes;
  onClick?: MouseEventHandler | undefined;
}
