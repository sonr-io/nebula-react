
import ScanBarcode from "../../../assets/duotone/ScanBarcode.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ScanBarcodeIcon({ className, dataTestid = "ScanBarcodeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ScanBarcode data-testid={dataTestid} className={classes} {...rest} />
  );
}
