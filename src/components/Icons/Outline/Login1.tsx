
import Login1 from "../../../assets/outline/Login1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Login1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Login1} data-testid="Login1Icon" className={classes} />
  );
}
