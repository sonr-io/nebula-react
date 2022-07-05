
import VideoTick from "../../../assets/outline/VideoTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function VideoTickIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <VideoTick data-testid="VideoTickIcon" className={classes} />
  );
}
