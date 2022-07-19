
import MessageRemove from "../../../assets/outline/MessageRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MessageRemoveIcon({ className, dataTestid = "MessageRemoveIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MessageRemove data-testid={dataTestid} className={classes} {...rest} />
  );
}
