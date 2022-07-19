
import Message1 from "../../../assets/outline/Message1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Message1Icon({ className, dataTestid = "Message1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Message1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
