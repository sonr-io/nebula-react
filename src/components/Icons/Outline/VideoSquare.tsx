
import VideoSquare from "../../../assets/outline/VideoSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VideoSquareIcon({ className, dataTestid = "VideoSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <VideoSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
