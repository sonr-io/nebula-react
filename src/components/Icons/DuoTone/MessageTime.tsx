
import MessageTime from "../../../assets/duotone/MessageTime.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MessageTimeIcon({ className, dataTestid = "MessageTimeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MessageTime data-testid={dataTestid} className={classes} {...rest} />
  );
}
