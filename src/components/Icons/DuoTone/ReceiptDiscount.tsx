
import ReceiptDiscount from "../../../assets/duotone/ReceiptDiscount.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ReceiptDiscountIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ReceiptDiscount data-testid="ReceiptDiscountIcon" className={classes} />
  );
}
