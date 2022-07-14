
import MonitorRecorder from "../../../assets/filled/MonitorRecorder.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MonitorRecorderIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MonitorRecorder data-testid="MonitorRecorderIcon" className={classes} />
  );
}
