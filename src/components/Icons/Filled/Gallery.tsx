
import Gallery from "../../../assets/filled/Gallery.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GalleryIcon({ className, dataTestid = "GalleryIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Gallery data-testid={dataTestid} className={classes} {...rest} />
  );
}
