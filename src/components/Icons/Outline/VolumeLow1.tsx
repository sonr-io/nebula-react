
import VolumeLow1 from "../../../assets/outline/VolumeLow1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function VolumeLow1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <VolumeLow1 data-testid="VolumeLow1Icon" className={classes} />
  );
}
