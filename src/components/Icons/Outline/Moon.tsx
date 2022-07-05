
import Moon from "../../../assets/outline/Moon.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MoonIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Moon data-testid="MoonIcon" className={classes} />
  );
}
