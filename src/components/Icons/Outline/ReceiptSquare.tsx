
import ReceiptSquare from "../../../assets/outline/ReceiptSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ReceiptSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ReceiptSquare data-testid="ReceiptSquareIcon" className={classes} />
  );
}
