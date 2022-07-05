
import Driver2 from "../../../assets/outline/Driver2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Driver2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Driver2 data-testid="Driver2Icon" className={classes} />
  );
}
