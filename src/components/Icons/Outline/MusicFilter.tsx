
import MusicFilter from "../../../assets/outline/MusicFilter.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MusicFilterIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MusicFilter data-testid="MusicFilterIcon" className={classes} />
  );
}
