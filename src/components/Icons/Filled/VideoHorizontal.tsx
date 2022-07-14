
import VideoHorizontal from "../../../assets/filled/VideoHorizontal.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VideoHorizontalIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={VideoHorizontal} data-testid="VideoHorizontalIcon" className={classes} />
  );
}
