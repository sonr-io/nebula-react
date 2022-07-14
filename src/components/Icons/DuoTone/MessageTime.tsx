
import MessageTime from "../../../assets/duotone/MessageTime.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MessageTimeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MessageTime data-testid="MessageTimeIcon" className={classes} />
  );
}
