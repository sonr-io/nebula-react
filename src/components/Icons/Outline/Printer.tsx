
import Printer from "../../../assets/outline/Printer.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PrinterIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Printer} data-testid="PrinterIcon" className={classes} />
  );
}
