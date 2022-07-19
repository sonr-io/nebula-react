
import MessageSquare from "../../../assets/filled/MessageSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MessageSquareIcon({ className, dataTestid = "MessageSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MessageSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
