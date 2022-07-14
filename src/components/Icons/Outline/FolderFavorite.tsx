
import FolderFavorite from "../../../assets/outline/FolderFavorite.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FolderFavoriteIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <FolderFavorite data-testid="FolderFavoriteIcon" className={classes} />
  );
}
