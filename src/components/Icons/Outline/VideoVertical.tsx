
import VideoVertical from "../../../assets/outline/VideoVertical.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function VideoVerticalIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <VideoVertical data-testid="VideoVerticalIcon" className={classes} />
  );
}
