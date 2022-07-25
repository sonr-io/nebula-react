
import GalleryExport from "../../../assets/filled/GalleryExport.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GalleryExportIcon({ className, dataTestid = "GalleryExportIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <GalleryExport data-testid={dataTestid} className={classes} {...rest} />
  );
}
