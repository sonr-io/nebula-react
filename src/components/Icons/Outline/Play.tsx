
import Play from "../../../assets/outline/Play.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PlayIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Play data-testid="PlayIcon" className={classes} />
  );
}