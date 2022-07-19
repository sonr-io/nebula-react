
import VideoTime from "../../../assets/duotone/VideoTime.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VideoTimeIcon({ className, dataTestid = "VideoTimeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <VideoTime data-testid={dataTestid} className={classes} {...rest} />
  );
}
