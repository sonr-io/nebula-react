
import RotateLeft1 from "../../../assets/outline/RotateLeft1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RotateLeft1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <RotateLeft1 data-testid="RotateLeft1Icon" className={classes} />
  );
}