
import UserTag from "../../../assets/outline/UserTag.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function UserTagIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <UserTag data-testid="UserTagIcon" className={classes} />
  );
}
