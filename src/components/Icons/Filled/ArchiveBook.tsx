
import ArchiveBook from "../../../assets/filled/ArchiveBook.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArchiveBookIcon({ className, dataTestid = "ArchiveBookIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ArchiveBook data-testid={dataTestid} className={classes} {...rest} />
  );
}
