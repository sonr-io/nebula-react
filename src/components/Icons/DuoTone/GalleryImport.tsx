
import GalleryImport from "../../../assets/duotone/GalleryImport.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GalleryImportIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={GalleryImport} data-testid="GalleryImportIcon" className={classes} />
  );
}
