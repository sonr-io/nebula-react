
import FlashCircle1 from "../../../assets/outline/FlashCircle1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function FlashCircle1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <FlashCircle1 data-testid="FlashCircle1Icon" className={classes} />
  );
}
