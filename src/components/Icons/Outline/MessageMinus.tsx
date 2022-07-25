
import MessageMinus from "../../../assets/outline/MessageMinus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MessageMinusIcon({ className, dataTestid = "MessageMinusIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MessageMinus data-testid={dataTestid} className={classes} {...rest} />
  );
}
