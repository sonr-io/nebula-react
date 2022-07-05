
import RefreshCircle from "../../../assets/duotone/RefreshCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function RefreshCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <RefreshCircle data-testid="RefreshCircleIcon" className={classes} />
  );
}
