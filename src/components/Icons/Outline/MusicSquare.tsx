
import MusicSquare from "../../../assets/outline/MusicSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MusicSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MusicSquare data-testid="MusicSquareIcon" className={classes} />
  );
}
