
import Message from "../../../assets/outline/Message.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MessageIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Message data-testid="MessageIcon" className={classes} />
  );
}
