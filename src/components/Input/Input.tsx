import { InputProps } from "../../types/inputProps";

const cx = require('classnames');

export const Input: React.FC<InputProps> = (props) => {
  const classes = cx(props.className, 'w-full');

  return (
    <input
      {...props}
      className={classes}
      data-testid="nebula-input"
    />
  )
}
