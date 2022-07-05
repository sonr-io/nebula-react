
import CallReceived from "../../../assets/filled/CallReceived.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CallReceivedIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CallReceived data-testid="CallReceivedIcon" className={classes} />
  );
}
