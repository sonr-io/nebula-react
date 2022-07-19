
import VideoOctagon from "../../../assets/outline/VideoOctagon.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VideoOctagonIcon({ className, dataTestid = "VideoOctagonIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <VideoOctagon data-testid={dataTestid} className={classes} {...rest} />
  );
}
