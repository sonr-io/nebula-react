
import NotificationCircle from "../../../assets/filled/NotificationCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function NotificationCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <NotificationCircle data-testid="NotificationCircleIcon" className={classes} />
  );
}
