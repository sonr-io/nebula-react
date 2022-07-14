
import GridLock from "../../../assets/outline/GridLock.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GridLockIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <GridLock data-testid="GridLockIcon" className={classes} />
  );
}
