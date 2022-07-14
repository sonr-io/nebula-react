
import ReceiptMinus from "../../../assets/filled/ReceiptMinus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ReceiptMinusIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ReceiptMinus} data-testid="ReceiptMinusIcon" className={classes} />
  );
}
