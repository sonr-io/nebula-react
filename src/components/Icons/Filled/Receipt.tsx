
import Receipt from "../../../assets/filled/Receipt.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ReceiptIcon({ className, dataTestid = "ReceiptIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Receipt data-testid={dataTestid} className={classes} {...rest} />
  );
}
