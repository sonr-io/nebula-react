
import GalleryRemove from "../../../assets/duotone/GalleryRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function GalleryRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <GalleryRemove data-testid="GalleryRemoveIcon" className={classes} />
  );
}
