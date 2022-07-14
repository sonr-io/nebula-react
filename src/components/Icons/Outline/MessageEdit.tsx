
import MessageEdit from "../../../assets/outline/MessageEdit.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MessageEditIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MessageEdit data-testid="MessageEditIcon" className={classes} />
  );
}
