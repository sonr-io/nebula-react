
import Message from "../../../assets/filled/Message.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MessageIcon({ className, dataTestid = "MessageIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Message data-testid={dataTestid} className={classes} {...rest} />
  );
}
