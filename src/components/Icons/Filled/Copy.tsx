
import Copy from "../../../assets/filled/Copy.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CopyIcon({ className, dataTestid = "CopyIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Copy data-testid={dataTestid} className={classes} {...rest} />
  );
}
