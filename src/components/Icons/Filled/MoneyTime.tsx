
import MoneyTime from "../../../assets/filled/MoneyTime.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MoneyTimeIcon({ className, dataTestid = "MoneyTimeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MoneyTime data-testid={dataTestid} className={classes} {...rest} />
  );
}
