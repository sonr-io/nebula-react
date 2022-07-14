
import RotateRight1 from "../../../assets/duotone/RotateRight1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RotateRight1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <RotateRight1 data-testid="RotateRight1Icon" className={classes} />
  );
}