
import MessageText1 from "../../../assets/duotone/MessageText1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MessageText1Icon({ className, dataTestid = "MessageText1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MessageText1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
