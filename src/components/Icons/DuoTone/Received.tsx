
import Received from "../../../assets/duotone/Received.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ReceivedIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Received} data-testid="ReceivedIcon" className={classes} />
  );
}
