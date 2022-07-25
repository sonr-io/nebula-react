
import MonitorRecorder from "../../../assets/filled/MonitorRecorder.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MonitorRecorderIcon({ className, dataTestid = "MonitorRecorderIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MonitorRecorder data-testid={dataTestid} className={classes} {...rest} />
  );
}
