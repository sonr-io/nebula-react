
import PrinterSlash from "../../../assets/duotone/PrinterSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function PrinterSlashIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <PrinterSlash data-testid="PrinterSlashIcon" className={classes} />
  );
}
