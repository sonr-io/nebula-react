
import Scan from "../../../assets/filled/Scan.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ScanIcon({ className, dataTestid = "ScanIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Scan data-testid={dataTestid} className={classes} {...rest} />
  );
}
