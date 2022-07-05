
import MonitorRecorder from "../../../assets/outline/MonitorRecorder.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MonitorRecorderIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MonitorRecorder data-testid="MonitorRecorderIcon" className={classes} />
  );
}
