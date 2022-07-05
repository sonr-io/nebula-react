
import Watch from "../../../assets/duotone/Watch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function WatchIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Watch data-testid="WatchIcon" className={classes} />
  );
}
