
import Money from "../../../assets/outline/Money.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MoneyIcon({ className, dataTestid = "MoneyIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Money data-testid={dataTestid} className={classes} {...rest} />
  );
}
