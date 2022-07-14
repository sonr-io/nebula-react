
import VideoTime from "../../../assets/duotone/VideoTime.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VideoTimeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <VideoTime data-testid="VideoTimeIcon" className={classes} />
  );
}
