
import Printer from "../../../assets/outline/Printer.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PrinterIcon({ className, dataTestid = "PrinterIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Printer data-testid={dataTestid} className={classes} {...rest} />
  );
}
