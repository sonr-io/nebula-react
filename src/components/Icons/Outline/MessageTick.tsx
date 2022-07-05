
import MessageTick from "../../../assets/outline/MessageTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MessageTickIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MessageTick data-testid="MessageTickIcon" className={classes} />
  );
}
