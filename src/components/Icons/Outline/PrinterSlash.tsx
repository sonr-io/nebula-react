
import PrinterSlash from "../../../assets/outline/PrinterSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PrinterSlashIcon({ className, dataTestid = "PrinterSlashIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <PrinterSlash data-testid={dataTestid} className={classes} {...rest} />
  );
}
