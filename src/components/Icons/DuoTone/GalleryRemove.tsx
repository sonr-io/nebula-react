
import GalleryRemove from "../../../assets/duotone/GalleryRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GalleryRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={GalleryRemove} data-testid="GalleryRemoveIcon" className={classes} />
  );
}
