
import MessageSquare from "../../../assets/outline/MessageSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MessageSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MessageSquare data-testid="MessageSquareIcon" className={classes} />
  );
}
