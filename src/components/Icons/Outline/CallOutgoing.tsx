
import CallOutgoing from "../../../assets/outline/CallOutgoing.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CallOutgoingIcon({ className, dataTestid = "CallOutgoingIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CallOutgoing data-testid={dataTestid} className={classes} {...rest} />
  );
}
