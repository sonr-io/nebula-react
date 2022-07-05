
import Sun from "../../../assets/outline/Sun.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function SunIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Sun data-testid="SunIcon" className={classes} />
  );
}
