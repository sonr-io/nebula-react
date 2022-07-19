
import Call from "../../../assets/duotone/Call.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CallIcon({ className, dataTestid = "CallIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Call data-testid={dataTestid} className={classes} {...rest} />
  );
}
