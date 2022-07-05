
import Scanning from "../../../assets/outline/Scanning.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ScanningIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Scanning data-testid="ScanningIcon" className={classes} />
  );
}
