
import ReceiptAdd from "../../../assets/duotone/ReceiptAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ReceiptAddIcon({ className, dataTestid = "ReceiptAddIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ReceiptAdd data-testid={dataTestid} className={classes} {...rest} />
  );
}
