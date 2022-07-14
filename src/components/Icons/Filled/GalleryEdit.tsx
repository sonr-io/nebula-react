
import GalleryEdit from "../../../assets/filled/GalleryEdit.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GalleryEditIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={GalleryEdit} data-testid="GalleryEditIcon" className={classes} />
  );
}
