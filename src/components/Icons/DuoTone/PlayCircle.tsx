
import PlayCircle from "../../../assets/duotone/PlayCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PlayCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={PlayCircle} data-testid="PlayCircleIcon" className={classes} />
  );
}
