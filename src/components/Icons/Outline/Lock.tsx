
import Lock from "../../../assets/outline/Lock.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function LockIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Lock data-testid="LockIcon" className={classes} />
  );
}
