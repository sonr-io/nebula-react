
import MessageRemove from "../../../assets/duotone/MessageRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MessageRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MessageRemove data-testid="MessageRemoveIcon" className={classes} />
  );
}
