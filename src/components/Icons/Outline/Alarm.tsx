
import Alarm from "../../../assets/outline/Alarm.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AlarmIcon({ className, dataTestid = "AlarmIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Alarm data-testid={dataTestid} className={classes} {...rest} />
  );
}
