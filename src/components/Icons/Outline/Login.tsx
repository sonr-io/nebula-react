
import Login from "../../../assets/outline/Login.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function LoginIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Login data-testid="LoginIcon" className={classes} />
  );
}
