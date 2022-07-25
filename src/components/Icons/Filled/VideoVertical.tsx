
import VideoVertical from "../../../assets/filled/VideoVertical.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VideoVerticalIcon({ className, dataTestid = "VideoVerticalIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <VideoVertical data-testid={dataTestid} className={classes} {...rest} />
  );
}
