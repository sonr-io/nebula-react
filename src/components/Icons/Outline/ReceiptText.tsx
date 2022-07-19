
import ReceiptText from "../../../assets/outline/ReceiptText.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ReceiptTextIcon({ className, dataTestid = "ReceiptTextIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ReceiptText data-testid={dataTestid} className={classes} {...rest} />
  );
}
