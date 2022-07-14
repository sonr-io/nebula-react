
import PrinterSlash from "../../../assets/filled/PrinterSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PrinterSlashIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <PrinterSlash data-testid="PrinterSlashIcon" className={classes} />
  );
}
