
import VideoCircle from "../../../assets/duotone/VideoCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VideoCircleIcon({ className, dataTestid = "VideoCircleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <VideoCircle data-testid={dataTestid} className={classes} {...rest} />
  );
}
