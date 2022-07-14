
import VideoRemove from "../../../assets/filled/VideoRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VideoRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <VideoRemove data-testid="VideoRemoveIcon" className={classes} />
  );
}
