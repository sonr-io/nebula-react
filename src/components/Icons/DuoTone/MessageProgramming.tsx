
import MessageProgramming from "../../../assets/duotone/MessageProgramming.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MessageProgrammingIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={MessageProgramming} data-testid="MessageProgrammingIcon" className={classes} />
  );
}
