
import PlayCircle from "../../../assets/outline/PlayCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function PlayCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <PlayCircle data-testid="PlayCircleIcon" className={classes} />
  );
}
