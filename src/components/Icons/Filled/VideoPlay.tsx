
import VideoPlay from "../../../assets/filled/VideoPlay.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VideoPlayIcon({ className, dataTestid = "VideoPlayIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <VideoPlay data-testid={dataTestid} className={classes} {...rest} />
  );
}
