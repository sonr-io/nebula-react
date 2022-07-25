
import ArchiveAdd from "../../../assets/outline/ArchiveAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArchiveAddIcon({ className, dataTestid = "ArchiveAddIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ArchiveAdd data-testid={dataTestid} className={classes} {...rest} />
  );
}
