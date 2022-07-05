
import VolumeMute from "../../../assets/outline/VolumeMute.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function VolumeMuteIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <VolumeMute data-testid="VolumeMuteIcon" className={classes} />
  );
}
