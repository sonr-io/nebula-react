
import ReceiptItem from "../../../assets/outline/ReceiptItem.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ReceiptItemIcon({ className, dataTestid = "ReceiptItemIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ReceiptItem data-testid={dataTestid} className={classes} {...rest} />
  );
}
