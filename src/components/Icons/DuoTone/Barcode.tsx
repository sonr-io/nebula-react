
import Barcode from "../../../assets/duotone/Barcode.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BarcodeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Barcode} data-testid="BarcodeIcon" className={classes} />
  );
}
