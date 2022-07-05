
import UserRemove from "../../../assets/outline/UserRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function UserRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <UserRemove data-testid="UserRemoveIcon" className={classes} />
  );
}
