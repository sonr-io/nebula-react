
import ReceiptDiscount from "../../../assets/outline/ReceiptDiscount.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ReceiptDiscountIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ReceiptDiscount data-testid="ReceiptDiscountIcon" className={classes} />
  );
}
