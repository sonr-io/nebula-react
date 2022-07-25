
import ArchiveMinus from "../../../assets/outline/ArchiveMinus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArchiveMinusIcon({ className, dataTestid = "ArchiveMinusIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ArchiveMinus data-testid={dataTestid} className={classes} {...rest} />
  );
}
