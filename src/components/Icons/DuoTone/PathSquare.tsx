
import PathSquare from "../../../assets/duotone/PathSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function PathSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <PathSquare data-testid="PathSquareIcon" className={classes} />
  );
}
