
import GalleryAdd from "../../../assets/filled/GalleryAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GalleryAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={GalleryAdd} data-testid="GalleryAddIcon" className={classes} />
  );
}
