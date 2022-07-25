
import GallerySlash from "../../../assets/outline/GallerySlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GallerySlashIcon({ className, dataTestid = "GallerySlashIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <GallerySlash data-testid={dataTestid} className={classes} {...rest} />
  );
}
