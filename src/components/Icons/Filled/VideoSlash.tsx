
import VideoSlash from "../../../assets/filled/VideoSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VideoSlashIcon({ className, dataTestid = "VideoSlashIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <VideoSlash data-testid={dataTestid} className={classes} {...rest} />
  );
}
