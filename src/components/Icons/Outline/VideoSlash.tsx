
import VideoSlash from "../../../assets/outline/VideoSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VideoSlashIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={VideoSlash} data-testid="VideoSlashIcon" className={classes} />
  );
}
