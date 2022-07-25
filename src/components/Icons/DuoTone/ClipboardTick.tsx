
import ClipboardTick from "../../../assets/duotone/ClipboardTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ClipboardTickIcon({ className, dataTestid = "ClipboardTickIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ClipboardTick data-testid={dataTestid} className={classes} {...rest} />
  );
}
