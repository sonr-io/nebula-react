
import FolderOpen from "../../../assets/duotone/FolderOpen.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FolderOpenIcon({ className, dataTestid = "FolderOpenIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <FolderOpen data-testid={dataTestid} className={classes} {...rest} />
  );
}
