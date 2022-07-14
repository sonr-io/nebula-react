
import Notification from "../../../assets/filled/Notification.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function NotificationIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Notification data-testid="NotificationIcon" className={classes} />
  );
}
