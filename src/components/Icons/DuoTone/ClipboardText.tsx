
import ClipboardText from "../../../assets/duotone/ClipboardText.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ClipboardTextIcon({ className, dataTestid = "ClipboardTextIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ClipboardText data-testid={dataTestid} className={classes} {...rest} />
  );
}
