
import VideoCircle from "../../../assets/filled/VideoCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function VideoCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <VideoCircle data-testid="VideoCircleIcon" className={classes} />
  );
}
