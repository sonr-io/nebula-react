export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  value?: string;
  styling?: string;
  invalid?: boolean;
}
