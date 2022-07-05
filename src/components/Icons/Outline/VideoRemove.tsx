
import VideoRemove from "../../../assets/outline/VideoRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function VideoRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <VideoRemove data-testid="VideoRemoveIcon" className={classes} />
  );
}
