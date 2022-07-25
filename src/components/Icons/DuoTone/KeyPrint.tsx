
import KeyPrint from "../../../assets/duotone/KeyPrint.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function KeyPrintIcon({ className, dataTestid = "KeyPrintIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <KeyPrint data-testid={dataTestid} className={classes} {...rest} />
  );
}
