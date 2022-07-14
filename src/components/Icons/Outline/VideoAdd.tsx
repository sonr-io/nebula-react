
import VideoAdd from "../../../assets/outline/VideoAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VideoAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <VideoAdd data-testid="VideoAddIcon" className={classes} />
  );
}
