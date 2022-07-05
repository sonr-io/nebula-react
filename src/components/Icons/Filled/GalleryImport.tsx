
import GalleryImport from "../../../assets/filled/GalleryImport.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function GalleryImportIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <GalleryImport data-testid="GalleryImportIcon" className={classes} />
  );
}
