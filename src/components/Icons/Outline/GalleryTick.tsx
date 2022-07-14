
import GalleryTick from "../../../assets/outline/GalleryTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GalleryTickIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <GalleryTick data-testid="GalleryTickIcon" className={classes} />
  );
}
