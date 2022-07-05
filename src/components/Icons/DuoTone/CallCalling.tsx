
import CallCalling from "../../../assets/duotone/CallCalling.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CallCallingIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CallCalling data-testid="CallCallingIcon" className={classes} />
  );
}
