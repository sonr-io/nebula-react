
import ArchiveTick from "../../../assets/duotone/ArchiveTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArchiveTickIcon({ className, dataTestid = "ArchiveTickIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ArchiveTick data-testid={dataTestid} className={classes} {...rest} />
  );
}
