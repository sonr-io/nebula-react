
import User from "../../../assets/outline/User.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function UserIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <User data-testid="UserIcon" className={classes} />
  );
}
