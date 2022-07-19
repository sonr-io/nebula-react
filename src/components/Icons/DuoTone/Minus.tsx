
import Minus from "../../../assets/duotone/Minus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MinusIcon({ className, dataTestid = "MinusIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Minus data-testid={dataTestid} className={classes} {...rest} />
  );
}
