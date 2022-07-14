
import NotificationStatus from "../../../assets/duotone/NotificationStatus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function NotificationStatusIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={NotificationStatus} data-testid="NotificationStatusIcon" className={classes} />
  );
}
