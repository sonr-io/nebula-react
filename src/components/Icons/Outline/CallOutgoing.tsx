
import CallOutgoing from "../../../assets/outline/CallOutgoing.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CallOutgoingIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CallOutgoing data-testid="CallOutgoingIcon" className={classes} />
  );
}
