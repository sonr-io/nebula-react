
import ShieldTick from "../../../assets/filled/ShieldTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ShieldTickIcon({ className, dataTestid = "ShieldTickIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ShieldTick data-testid={dataTestid} className={classes} {...rest} />
  );
}
