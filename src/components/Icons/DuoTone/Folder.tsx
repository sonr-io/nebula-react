
import Folder from "../../../assets/duotone/Folder.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FolderIcon({ className, dataTestid = "FolderIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Folder data-testid={dataTestid} className={classes} {...rest} />
  );
}
