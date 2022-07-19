
import NotificationCircle from "../../../assets/outline/NotificationCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function NotificationCircleIcon({ className, dataTestid = "NotificationCircleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <NotificationCircle data-testid={dataTestid} className={classes} {...rest} />
  );
}
