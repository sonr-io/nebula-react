
import CallIncoming from "../../../assets/filled/CallIncoming.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CallIncomingIcon({ className, dataTestid = "CallIncomingIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CallIncoming data-testid={dataTestid} className={classes} {...rest} />
  );
}
