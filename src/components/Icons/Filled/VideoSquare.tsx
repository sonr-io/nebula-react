
import VideoSquare from "../../../assets/filled/VideoSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VideoSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={VideoSquare} data-testid="VideoSquareIcon" className={classes} />
  );
}
