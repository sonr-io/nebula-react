
import Alarm from "../../../assets/duotone/Alarm.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AlarmIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Alarm} data-testid="AlarmIcon" className={classes} />
  );
}
