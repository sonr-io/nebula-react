
import ReceiptMinus from "../../../assets/duotone/ReceiptMinus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ReceiptMinusIcon({ className, dataTestid = "ReceiptMinusIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ReceiptMinus data-testid={dataTestid} className={classes} {...rest} />
  );
}
