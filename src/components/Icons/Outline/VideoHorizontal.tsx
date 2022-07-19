
import VideoHorizontal from "../../../assets/outline/VideoHorizontal.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VideoHorizontalIcon({ className, dataTestid = "VideoHorizontalIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <VideoHorizontal data-testid={dataTestid} className={classes} {...rest} />
  );
}
