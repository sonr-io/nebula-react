
import MessageEdit from "../../../assets/duotone/MessageEdit.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MessageEditIcon({ className, dataTestid = "MessageEditIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MessageEdit data-testid={dataTestid} className={classes} {...rest} />
  );
}
