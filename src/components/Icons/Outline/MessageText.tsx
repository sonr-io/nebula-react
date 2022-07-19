
import MessageText from "../../../assets/outline/MessageText.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MessageTextIcon({ className, dataTestid = "MessageTextIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MessageText data-testid={dataTestid} className={classes} {...rest} />
  );
}
