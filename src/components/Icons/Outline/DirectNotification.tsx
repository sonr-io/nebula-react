
import DirectNotification from "../../../assets/outline/DirectNotification.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DirectNotificationIcon({ className, dataTestid = "DirectNotificationIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <DirectNotification data-testid={dataTestid} className={classes} {...rest} />
  );
}
