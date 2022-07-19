
import PictureFrame from "../../../assets/duotone/PictureFrame.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PictureFrameIcon({ className, dataTestid = "PictureFrameIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <PictureFrame data-testid={dataTestid} className={classes} {...rest} />
  );
}
