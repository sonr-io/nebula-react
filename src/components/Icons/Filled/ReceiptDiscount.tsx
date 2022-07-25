
import ReceiptDiscount from "../../../assets/filled/ReceiptDiscount.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ReceiptDiscountIcon({ className, dataTestid = "ReceiptDiscountIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ReceiptDiscount data-testid={dataTestid} className={classes} {...rest} />
  );
}
