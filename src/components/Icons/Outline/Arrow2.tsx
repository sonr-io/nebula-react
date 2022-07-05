
import Arrow2 from "../../../assets/outline/Arrow2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Arrow2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Arrow2 data-testid="Arrow2Icon" className={classes} />
  );
}
