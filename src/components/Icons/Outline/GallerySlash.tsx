
import GallerySlash from "../../../assets/outline/GallerySlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GallerySlashIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <GallerySlash data-testid="GallerySlashIcon" className={classes} />
  );
}
