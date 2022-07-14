
import MessageNotif from "../../../assets/duotone/MessageNotif.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MessageNotifIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MessageNotif data-testid="MessageNotifIcon" className={classes} />
  );
}
