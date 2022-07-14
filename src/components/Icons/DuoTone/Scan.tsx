
import Scan from "../../../assets/duotone/Scan.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ScanIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Scan data-testid="ScanIcon" className={classes} />
  );
}
