
import GalleryEdit from "../../../assets/filled/GalleryEdit.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GalleryEditIcon({ className, dataTestid = "GalleryEditIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <GalleryEdit data-testid={dataTestid} className={classes} {...rest} />
  );
}
