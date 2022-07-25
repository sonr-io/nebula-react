
import GalleryRemove from "../../../assets/filled/GalleryRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GalleryRemoveIcon({ className, dataTestid = "GalleryRemoveIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <GalleryRemove data-testid={dataTestid} className={classes} {...rest} />
  );
}
