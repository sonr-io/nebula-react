
import SmsNotification from "../../../assets/duotone/SmsNotification.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SmsNotificationIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SmsNotification data-testid="SmsNotificationIcon" className={classes} />
  );
}
