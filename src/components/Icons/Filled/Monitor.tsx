
import Monitor from "../../../assets/filled/Monitor.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MonitorIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Monitor data-testid="MonitorIcon" className={classes} />
  );
}