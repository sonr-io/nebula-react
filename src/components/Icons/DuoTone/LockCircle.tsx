
import LockCircle from "../../../assets/duotone/LockCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LockCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <LockCircle data-testid="LockCircleIcon" className={classes} />
  );
}
