
import VideoCircle from "../../../assets/duotone/VideoCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VideoCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <VideoCircle data-testid="VideoCircleIcon" className={classes} />
  );
}
