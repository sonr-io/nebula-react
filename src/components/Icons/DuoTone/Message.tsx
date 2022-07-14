
import Message from "../../../assets/duotone/Message.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MessageIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Message data-testid="MessageIcon" className={classes} />
  );
}
