
import TransactionMinus from "../../../assets/duotone/TransactionMinus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TransactionMinusIcon({ className, dataTestid = "TransactionMinusIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <TransactionMinus data-testid={dataTestid} className={classes} {...rest} />
  );
}
