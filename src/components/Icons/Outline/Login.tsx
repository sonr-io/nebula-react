
import Login from "../../../assets/outline/Login.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LoginIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Login} data-testid="LoginIcon" className={classes} />
  );
}
