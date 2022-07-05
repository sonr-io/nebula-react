
import VideoTime from "../../../assets/filled/VideoTime.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function VideoTimeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <VideoTime data-testid="VideoTimeIcon" className={classes} />
  );
}
