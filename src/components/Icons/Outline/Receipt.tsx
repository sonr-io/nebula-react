
import Receipt from "../../../assets/outline/Receipt.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ReceiptIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Receipt data-testid="ReceiptIcon" className={classes} />
  );
}