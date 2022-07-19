
import ClipboardExport from "../../../assets/outline/ClipboardExport.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ClipboardExportIcon({ className, dataTestid = "ClipboardExportIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ClipboardExport data-testid={dataTestid} className={classes} {...rest} />
  );
}
