
import ClipboardImport from "../../../assets/outline/ClipboardImport.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ClipboardImportIcon({ className, dataTestid = "ClipboardImportIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ClipboardImport data-testid={dataTestid} className={classes} {...rest} />
  );
}
