
import RotateRight from "../../../assets/outline/RotateRight.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function RotateRightIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <RotateRight data-testid="RotateRightIcon" className={classes} />
  );
}
