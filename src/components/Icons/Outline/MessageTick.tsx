
import MessageTick from "../../../assets/outline/MessageTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MessageTickIcon({ className, dataTestid = "MessageTickIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MessageTick data-testid={dataTestid} className={classes} {...rest} />
  );
}
