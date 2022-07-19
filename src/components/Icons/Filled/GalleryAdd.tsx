
import GalleryAdd from "../../../assets/filled/GalleryAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GalleryAddIcon({ className, dataTestid = "GalleryAddIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <GalleryAdd data-testid={dataTestid} className={classes} {...rest} />
  );
}
