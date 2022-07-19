
import MonitorMobile from "../../../assets/outline/MonitorMobile.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MonitorMobileIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MonitorMobile data-testid="MonitorMobileIcon" className={classes} />
  );
}
