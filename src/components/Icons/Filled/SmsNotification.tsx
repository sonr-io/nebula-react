
import SmsNotification from "../../../assets/filled/SmsNotification.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SmsNotificationIcon({ className, dataTestid = "SmsNotificationIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <SmsNotification data-testid={dataTestid} className={classes} {...rest} />
  );
}
