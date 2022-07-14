
import GalleryExport from "../../../assets/outline/GalleryExport.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GalleryExportIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={GalleryExport} data-testid="GalleryExportIcon" className={classes} />
  );
}
