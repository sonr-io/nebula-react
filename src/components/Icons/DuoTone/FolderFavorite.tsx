
import FolderFavorite from "../../../assets/duotone/FolderFavorite.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FolderFavoriteIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={FolderFavorite} data-testid="FolderFavoriteIcon" className={classes} />
  );
}
