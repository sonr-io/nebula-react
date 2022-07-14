
import MusicFilter from "../../../assets/outline/MusicFilter.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MusicFilterIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={MusicFilter} data-testid="MusicFilterIcon" className={classes} />
  );
}
