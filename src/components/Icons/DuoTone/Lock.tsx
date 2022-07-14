
import Lock from "../../../assets/duotone/Lock.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LockIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Lock data-testid="LockIcon" className={classes} />
  );
}
