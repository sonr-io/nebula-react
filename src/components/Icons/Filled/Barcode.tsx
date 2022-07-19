
import Barcode from "../../../assets/filled/Barcode.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BarcodeIcon({ className, dataTestid = "BarcodeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Barcode data-testid={dataTestid} className={classes} {...rest} />
  );
}
