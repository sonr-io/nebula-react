
import NotificationStatus from "../../../assets/outline/NotificationStatus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function NotificationStatusIcon({ className, dataTestid = "NotificationStatusIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <NotificationStatus data-testid={dataTestid} className={classes} {...rest} />
  );
}
