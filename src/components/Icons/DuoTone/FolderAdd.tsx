
import FolderAdd from "../../../assets/duotone/FolderAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FolderAddIcon({ className, dataTestid = "FolderAddIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <FolderAdd data-testid={dataTestid} className={classes} {...rest} />
  );
}
