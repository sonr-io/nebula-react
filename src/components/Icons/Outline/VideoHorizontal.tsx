
import VideoHorizontal from "../../../assets/outline/VideoHorizontal.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function VideoHorizontalIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <VideoHorizontal data-testid="VideoHorizontalIcon" className={classes} />
  );
}
