
import MessageNotif from "../../../assets/filled/MessageNotif.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MessageNotifIcon({ className, dataTestid = "MessageNotifIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MessageNotif data-testid={dataTestid} className={classes} {...rest} />
  );
}
