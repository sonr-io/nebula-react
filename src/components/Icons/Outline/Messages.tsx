
import Messages from "../../../assets/outline/Messages.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MessagesIcon({ className, dataTestid = "MessagesIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Messages data-testid={dataTestid} className={classes} {...rest} />
  );
}
