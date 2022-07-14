
import VideoOctagon from "../../../assets/duotone/VideoOctagon.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VideoOctagonIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <VideoOctagon data-testid="VideoOctagonIcon" className={classes} />
  );
}
