
import Archive from "../../../assets/filled/Archive.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArchiveIcon({ className, dataTestid = "ArchiveIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Archive data-testid={dataTestid} className={classes} {...rest} />
  );
}
