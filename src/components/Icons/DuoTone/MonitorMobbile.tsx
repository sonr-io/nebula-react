
import MonitorMobbile from "../../../assets/duotone/MonitorMobbile.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MonitorMobbileIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={MonitorMobbile} data-testid="MonitorMobbileIcon" className={classes} />
  );
}
