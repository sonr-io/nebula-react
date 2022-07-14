
import User from "../../../assets/outline/User.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function UserIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={User} data-testid="UserIcon" className={classes} />
  );
}
