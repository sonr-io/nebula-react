
import VideoRemove from "../../../assets/duotone/VideoRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VideoRemoveIcon({ className, dataTestid = "VideoRemoveIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <VideoRemove data-testid={dataTestid} className={classes} {...rest} />
  );
}
