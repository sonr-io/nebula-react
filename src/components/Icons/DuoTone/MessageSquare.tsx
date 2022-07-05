
import MessageSquare from "../../../assets/duotone/MessageSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MessageSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MessageSquare data-testid="MessageSquareIcon" className={classes} />
  );
}
