
import Login from "../../../assets/filled/Login.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LoginIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Login data-testid="LoginIcon" className={classes} />
  );
}
