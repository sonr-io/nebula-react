
import Clipboard from "../../../assets/duotone/Clipboard.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ClipboardIcon({ className, dataTestid = "ClipboardIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Clipboard data-testid={dataTestid} className={classes} {...rest} />
  );
}
