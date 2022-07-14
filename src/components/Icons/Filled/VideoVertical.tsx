
import VideoVertical from "../../../assets/filled/VideoVertical.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VideoVerticalIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <VideoVertical data-testid="VideoVerticalIcon" className={classes} />
  );
}
