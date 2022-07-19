
import Video from "../../../assets/duotone/Video.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VideoIcon({ className, dataTestid = "VideoIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Video data-testid={dataTestid} className={classes} {...rest} />
  );
}
