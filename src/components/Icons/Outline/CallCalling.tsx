
import CallCalling from "../../../assets/outline/CallCalling.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CallCallingIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={CallCalling} data-testid="CallCallingIcon" className={classes} />
  );
}
