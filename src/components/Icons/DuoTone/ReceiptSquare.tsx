
import ReceiptSquare from "../../../assets/duotone/ReceiptSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ReceiptSquareIcon({ className, dataTestid = "ReceiptSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ReceiptSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
