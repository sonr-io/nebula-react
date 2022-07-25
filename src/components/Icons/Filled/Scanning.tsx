
import Scanning from "../../../assets/filled/Scanning.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ScanningIcon({ className, dataTestid = "ScanningIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Scanning data-testid={dataTestid} className={classes} {...rest} />
  );
}
