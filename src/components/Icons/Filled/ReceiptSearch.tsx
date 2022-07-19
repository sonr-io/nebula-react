
import ReceiptSearch from "../../../assets/filled/ReceiptSearch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ReceiptSearchIcon({ className, dataTestid = "ReceiptSearchIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ReceiptSearch data-testid={dataTestid} className={classes} {...rest} />
  );
}
