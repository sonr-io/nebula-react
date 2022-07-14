
import CallReceived from "../../../assets/filled/CallReceived.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CallReceivedIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={CallReceived} data-testid="CallReceivedIcon" className={classes} />
  );
}
