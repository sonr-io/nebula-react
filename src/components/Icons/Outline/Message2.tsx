
import Message2 from "../../../assets/outline/Message2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Message2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Message2 data-testid="Message2Icon" className={classes} />
  );
}
