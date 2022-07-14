
import MusicCircle from "../../../assets/outline/MusicCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MusicCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MusicCircle data-testid="MusicCircleIcon" className={classes} />
  );
}
