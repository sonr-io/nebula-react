
import GalleryFavorite from "../../../assets/outline/GalleryFavorite.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GalleryFavoriteIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <GalleryFavorite data-testid="GalleryFavoriteIcon" className={classes} />
  );
}
