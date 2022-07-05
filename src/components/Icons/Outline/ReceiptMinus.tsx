
import ReceiptMinus from "../../../assets/outline/ReceiptMinus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ReceiptMinusIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ReceiptMinus data-testid="ReceiptMinusIcon" className={classes} />
  );
}
