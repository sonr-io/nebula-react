
import VideoPlay from "../../../assets/outline/VideoPlay.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function VideoPlayIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <VideoPlay data-testid="VideoPlayIcon" className={classes} />
  );
}
