
import MessageSearch from "../../../assets/outline/MessageSearch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MessageSearchIcon({ className, dataTestid = "MessageSearchIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MessageSearch data-testid={dataTestid} className={classes} {...rest} />
  );
}
