
import MessageCircle from "../../../assets/outline/MessageCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MessageCircleIcon({ className, dataTestid = "MessageCircleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MessageCircle data-testid={dataTestid} className={classes} {...rest} />
  );
}
