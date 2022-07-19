
import FolderFavorite from "../../../assets/outline/FolderFavorite.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FolderFavoriteIcon({ className, dataTestid = "FolderFavoriteIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <FolderFavorite data-testid={dataTestid} className={classes} {...rest} />
  );
}
