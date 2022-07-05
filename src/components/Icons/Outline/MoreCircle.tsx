
import MoreCircle from "../../../assets/outline/MoreCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MoreCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MoreCircle data-testid="MoreCircleIcon" className={classes} />
  );
}
