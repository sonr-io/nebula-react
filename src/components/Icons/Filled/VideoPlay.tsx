
import VideoPlay from "../../../assets/filled/VideoPlay.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VideoPlayIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={VideoPlay} data-testid="VideoPlayIcon" className={classes} />
  );
}
