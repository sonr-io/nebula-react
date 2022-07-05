
import Music from "../../../assets/outline/Music.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MusicIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Music data-testid="MusicIcon" className={classes} />
  );
}
