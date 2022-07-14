
import SmsNotification from "../../../assets/outline/SmsNotification.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SmsNotificationIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={SmsNotification} data-testid="SmsNotificationIcon" className={classes} />
  );
}
