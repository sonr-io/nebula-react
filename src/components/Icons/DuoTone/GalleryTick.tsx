
import GalleryTick from "../../../assets/duotone/GalleryTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GalleryTickIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={GalleryTick} data-testid="GalleryTickIcon" className={classes} />
  );
}
