
import CallRemove from "../../../assets/duotone/CallRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CallRemoveIcon({ className, dataTestid = "CallRemoveIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CallRemove data-testid={dataTestid} className={classes} {...rest} />
  );
}
