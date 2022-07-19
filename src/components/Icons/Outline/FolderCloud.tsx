
import FolderCloud from "../../../assets/outline/FolderCloud.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FolderCloudIcon({ className, dataTestid = "FolderCloudIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <FolderCloud data-testid={dataTestid} className={classes} {...rest} />
  );
}
