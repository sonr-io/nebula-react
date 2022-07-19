
import Scanner from "../../../assets/filled/Scanner.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ScannerIcon({ className, dataTestid = "ScannerIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Scanner data-testid={dataTestid} className={classes} {...rest} />
  );
}
