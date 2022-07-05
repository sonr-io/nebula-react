
import Received from "../../../assets/filled/Received.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ReceivedIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Received data-testid="ReceivedIcon" className={classes} />
  );
}
