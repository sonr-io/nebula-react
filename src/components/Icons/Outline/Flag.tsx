
import Flag from "../../../assets/outline/Flag.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function FlagIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Flag data-testid="FlagIcon" className={classes} />
  );
}
