
import FingerScan from "../../../assets/filled/FingerScan.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function FingerScanIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <FingerScan data-testid="FingerScanIcon" className={classes} />
  );
}
