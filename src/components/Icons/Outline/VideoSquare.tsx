
import VideoSquare from "../../../assets/outline/VideoSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function VideoSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <VideoSquare data-testid="VideoSquareIcon" className={classes} />
  );
}
