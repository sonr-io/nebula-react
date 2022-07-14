
import ScanBarcode from "../../../assets/filled/ScanBarcode.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ScanBarcodeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ScanBarcode data-testid="ScanBarcodeIcon" className={classes} />
  );
}
