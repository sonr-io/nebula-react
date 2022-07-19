
import ClipboardClose from "../../../assets/outline/ClipboardClose.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ClipboardCloseIcon({ className, dataTestid = "ClipboardCloseIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ClipboardClose data-testid={dataTestid} className={classes} {...rest} />
  );
}
