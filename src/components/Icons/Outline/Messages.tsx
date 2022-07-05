
import Messages from "../../../assets/outline/Messages.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MessagesIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Messages data-testid="MessagesIcon" className={classes} />
  );
}
