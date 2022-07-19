import { IconNames, IconTypes } from "./iconProps";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  value?: string;
  styling?: string;
  invalid?: boolean;
  clear?: boolean;
  info?: boolean;
  iconName?: IconNames;
  iconType?: IconTypes;
}

export interface LabelInputProps extends InputProps {
  label?: string;
  caption?: string;
  vertical?: boolean;
}
