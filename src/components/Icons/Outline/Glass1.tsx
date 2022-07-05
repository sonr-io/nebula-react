
import Glass1 from "../../../assets/outline/Glass1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Glass1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Glass1 data-testid="Glass1Icon" className={classes} />
  );
}
