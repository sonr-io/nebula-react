
import FolderCross from "../../../assets/outline/FolderCross.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FolderCrossIcon({ className, dataTestid = "FolderCrossIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <FolderCross data-testid={dataTestid} className={classes} {...rest} />
  );
}
