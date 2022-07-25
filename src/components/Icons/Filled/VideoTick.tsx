
import VideoTick from "../../../assets/filled/VideoTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VideoTickIcon({ className, dataTestid = "VideoTickIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <VideoTick data-testid={dataTestid} className={classes} {...rest} />
  );
}
