
import GalleryTick from "../../../assets/duotone/GalleryTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GalleryTickIcon({ className, dataTestid = "GalleryTickIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <GalleryTick data-testid={dataTestid} className={classes} {...rest} />
  );
}
