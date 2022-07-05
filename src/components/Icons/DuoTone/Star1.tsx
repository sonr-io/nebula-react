
import Star1 from "../../../assets/duotone/Star1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Star1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Star1 data-testid="Star1Icon" className={classes} />
  );
}
