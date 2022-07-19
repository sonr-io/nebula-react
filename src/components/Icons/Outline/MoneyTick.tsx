
import MoneyTick from "../../../assets/outline/MoneyTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MoneyTickIcon({ className, dataTestid = "MoneyTickIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MoneyTick data-testid={dataTestid} className={classes} {...rest} />
  );
}
