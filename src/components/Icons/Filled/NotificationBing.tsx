
import NotificationBing from "../../../assets/filled/NotificationBing.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function NotificationBingIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <NotificationBing data-testid="NotificationBingIcon" className={classes} />
  );
}
