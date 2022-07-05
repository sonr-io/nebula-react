
import GridLock from "../../../assets/duotone/GridLock.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function GridLockIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <GridLock data-testid="GridLockIcon" className={classes} />
  );
}
