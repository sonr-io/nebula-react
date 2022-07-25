
import FingerScan from "../../../assets/outline/FingerScan.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FingerScanIcon({ className, dataTestid = "FingerScanIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <FingerScan data-testid={dataTestid} className={classes} {...rest} />
  );
}
