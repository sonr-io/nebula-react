
import SmsNotification from "../../../assets/outline/SmsNotification.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function SmsNotificationIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SmsNotification data-testid="SmsNotificationIcon" className={classes} />
  );
}
