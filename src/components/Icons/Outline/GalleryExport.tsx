
import GalleryExport from "../../../assets/outline/GalleryExport.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function GalleryExportIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <GalleryExport data-testid="GalleryExportIcon" className={classes} />
  );
}
