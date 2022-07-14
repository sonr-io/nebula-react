
import RefreshCircle from "../../../assets/outline/RefreshCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RefreshCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <RefreshCircle data-testid="RefreshCircleIcon" className={classes} />
  );
}