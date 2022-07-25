
import Bank from "../../../assets/outline/Bank.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BankIcon({ className, dataTestid = "BankIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Bank data-testid={dataTestid} className={classes} {...rest} />
  );
}
