
import CallCalling from "../../../assets/duotone/CallCalling.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CallCallingIcon({ className, dataTestid = "CallCallingIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CallCalling data-testid={dataTestid} className={classes} {...rest} />
  );
}
