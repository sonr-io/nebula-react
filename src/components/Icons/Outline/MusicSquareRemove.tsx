
import MusicSquareRemove from "../../../assets/outline/MusicSquareRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MusicSquareRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MusicSquareRemove data-testid="MusicSquareRemoveIcon" className={classes} />
  );
}
