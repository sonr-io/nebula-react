
import NotificationCircle from "../../../assets/duotone/NotificationCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function NotificationCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={NotificationCircle} data-testid="NotificationCircleIcon" className={classes} />
  );
}
