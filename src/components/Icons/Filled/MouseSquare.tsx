
import MouseSquare from "../../../assets/filled/MouseSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MouseSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MouseSquare data-testid="MouseSquareIcon" className={classes} />
  );
}
