
import GalleryEdit from "../../../assets/filled/GalleryEdit.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function GalleryEditIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <GalleryEdit data-testid="GalleryEditIcon" className={classes} />
  );
}
