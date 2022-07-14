
import VideoSlash from "../../../assets/filled/VideoSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VideoSlashIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <VideoSlash data-testid="VideoSlashIcon" className={classes} />
  );
}
