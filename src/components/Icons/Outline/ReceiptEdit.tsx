
import ReceiptEdit from "../../../assets/outline/ReceiptEdit.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ReceiptEditIcon({ className, dataTestid = "ReceiptEditIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ReceiptEdit data-testid={dataTestid} className={classes} {...rest} />
  );
}
