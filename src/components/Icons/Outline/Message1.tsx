
import Message1 from "../../../assets/outline/Message1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Message1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Message1 data-testid="Message1Icon" className={classes} />
  );
}
