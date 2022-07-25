
import MessageProgramming from "../../../assets/duotone/MessageProgramming.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MessageProgrammingIcon({ className, dataTestid = "MessageProgrammingIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MessageProgramming data-testid={dataTestid} className={classes} {...rest} />
  );
}
