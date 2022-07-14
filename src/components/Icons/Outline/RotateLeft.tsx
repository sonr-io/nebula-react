
import RotateLeft from "../../../assets/outline/RotateLeft.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RotateLeftIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <RotateLeft data-testid="RotateLeftIcon" className={classes} />
  );
}
