
import VolumeHigh from "../../../assets/duotone/VolumeHigh.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VolumeHighIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <VolumeHigh data-testid="VolumeHighIcon" className={classes} />
  );
}