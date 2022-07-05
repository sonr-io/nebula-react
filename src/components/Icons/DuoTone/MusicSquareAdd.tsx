
import MusicSquareAdd from "../../../assets/duotone/MusicSquareAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MusicSquareAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MusicSquareAdd data-testid="MusicSquareAddIcon" className={classes} />
  );
}
