
import MessageCircle from "../../../assets/outline/MessageCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MessageCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MessageCircle data-testid="MessageCircleIcon" className={classes} />
  );
}
