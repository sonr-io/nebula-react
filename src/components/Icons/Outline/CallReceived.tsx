
import CallReceived from "../../../assets/outline/CallReceived.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CallReceivedIcon({ className, dataTestid = "CallReceivedIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CallReceived data-testid={dataTestid} className={classes} {...rest} />
  );
}
