
import MusicSquareAdd from "../../../assets/outline/MusicSquareAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MusicSquareAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MusicSquareAdd data-testid="MusicSquareAddIcon" className={classes} />
  );
}
