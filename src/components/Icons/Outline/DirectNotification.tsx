
import DirectNotification from "../../../assets/outline/DirectNotification.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DirectNotificationIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <DirectNotification data-testid="DirectNotificationIcon" className={classes} />
  );
}
