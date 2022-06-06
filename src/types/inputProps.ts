export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  value?: string;
  styling?: string;
  invalid?: boolean;
  clear?: boolean;
  info?: boolean;
  icon?: string;
}
