
import VolumeLow from "../../../assets/outline/VolumeLow.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function VolumeLowIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <VolumeLow data-testid="VolumeLowIcon" className={classes} />
  );
}
