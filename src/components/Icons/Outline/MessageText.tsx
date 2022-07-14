
import MessageText from "../../../assets/outline/MessageText.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MessageTextIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MessageText data-testid="MessageTextIcon" className={classes} />
  );
}
