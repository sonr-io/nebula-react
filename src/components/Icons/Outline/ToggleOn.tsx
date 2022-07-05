
import ToggleOn from "../../../assets/outline/ToggleOn.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ToggleOnIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ToggleOn data-testid="ToggleOnIcon" className={classes} />
  );
}
