
import ReceiptDisscount from "../../../assets/duotone/ReceiptDisscount.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ReceiptDisscountIcon({ className, dataTestid = "ReceiptDisscountIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ReceiptDisscount data-testid={dataTestid} className={classes} {...rest} />
  );
}
