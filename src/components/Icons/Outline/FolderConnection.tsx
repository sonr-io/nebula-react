
import FolderConnection from "../../../assets/outline/FolderConnection.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FolderConnectionIcon({ className, dataTestid = "FolderConnectionIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <FolderConnection data-testid={dataTestid} className={classes} {...rest} />
  );
}
