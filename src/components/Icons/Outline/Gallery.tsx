
import Gallery from "../../../assets/outline/Gallery.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GalleryIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Gallery data-testid="GalleryIcon" className={classes} />
  );
}