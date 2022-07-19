
import ArchiveSlash from "../../../assets/filled/ArchiveSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArchiveSlashIcon({ className, dataTestid = "ArchiveSlashIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ArchiveSlash data-testid={dataTestid} className={classes} {...rest} />
  );
}
