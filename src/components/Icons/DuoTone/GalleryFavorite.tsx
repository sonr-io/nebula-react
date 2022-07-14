
import GalleryFavorite from "../../../assets/duotone/GalleryFavorite.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GalleryFavoriteIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={GalleryFavorite} data-testid="GalleryFavoriteIcon" className={classes} />
  );
}
