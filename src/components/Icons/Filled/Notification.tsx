
import Notification from "../../../assets/filled/Notification.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function NotificationIcon({ className, dataTestid = "NotificationIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Notification data-testid={dataTestid} className={classes} {...rest} />
  );
}
