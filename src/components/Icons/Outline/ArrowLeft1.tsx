
import ArrowLeft1 from "../../../assets/outline/ArrowLeft1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ArrowLeft1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ArrowLeft1 data-testid="ArrowLeft1Icon" className={classes} />
  );
}
