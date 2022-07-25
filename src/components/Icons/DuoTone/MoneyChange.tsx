
import MoneyChange from "../../../assets/duotone/MoneyChange.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MoneyChangeIcon({ className, dataTestid = "MoneyChangeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MoneyChange data-testid={dataTestid} className={classes} {...rest} />
  );
}
