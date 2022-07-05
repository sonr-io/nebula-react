
import Printer from "../../../assets/filled/Printer.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function PrinterIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Printer data-testid="PrinterIcon" className={classes} />
  );
}
