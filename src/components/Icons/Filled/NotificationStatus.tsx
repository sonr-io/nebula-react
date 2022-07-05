
import NotificationStatus from "../../../assets/filled/NotificationStatus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function NotificationStatusIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <NotificationStatus data-testid="NotificationStatusIcon" className={classes} />
  );
}
