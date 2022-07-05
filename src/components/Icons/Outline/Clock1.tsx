
import Clock1 from "../../../assets/outline/Clock1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Clock1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Clock1 data-testid="Clock1Icon" className={classes} />
  );
}
