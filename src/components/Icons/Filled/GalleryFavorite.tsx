
import GalleryFavorite from "../../../assets/filled/GalleryFavorite.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GalleryFavoriteIcon({ className, dataTestid = "GalleryFavoriteIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <GalleryFavorite data-testid={dataTestid} className={classes} {...rest} />
  );
}
