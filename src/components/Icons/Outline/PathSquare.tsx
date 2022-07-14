
import PathSquare from "../../../assets/outline/PathSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PathSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={PathSquare} data-testid="PathSquareIcon" className={classes} />
  );
}
