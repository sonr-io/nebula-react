
import VideoAdd from "../../../assets/duotone/VideoAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VideoAddIcon({ className, dataTestid = "VideoAddIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <VideoAdd data-testid={dataTestid} className={classes} {...rest} />
  );
}
