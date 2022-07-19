
import CallMinus from "../../../assets/duotone/CallMinus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CallMinusIcon({ className, dataTestid = "CallMinusIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CallMinus data-testid={dataTestid} className={classes} {...rest} />
  );
}
