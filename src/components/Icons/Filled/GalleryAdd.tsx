
import GalleryAdd from "../../../assets/filled/GalleryAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function GalleryAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <GalleryAdd data-testid="GalleryAddIcon" className={classes} />
  );
}
