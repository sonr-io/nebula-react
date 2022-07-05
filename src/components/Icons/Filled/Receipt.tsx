
import Receipt from "../../../assets/filled/Receipt.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ReceiptIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Receipt data-testid="ReceiptIcon" className={classes} />
  );
}
