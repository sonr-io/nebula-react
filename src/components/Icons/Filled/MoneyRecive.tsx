
import MoneyRecive from "../../../assets/filled/MoneyRecive.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MoneyReciveIcon({ className, dataTestid = "MoneyReciveIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MoneyRecive data-testid={dataTestid} className={classes} {...rest} />
  );
}
