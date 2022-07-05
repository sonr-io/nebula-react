
import Video from "../../../assets/duotone/Video.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function VideoIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Video data-testid="VideoIcon" className={classes} />
  );
}
