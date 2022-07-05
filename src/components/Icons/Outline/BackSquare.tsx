
import BackSquare from "../../../assets/outline/BackSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function BackSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BackSquare data-testid="BackSquareIcon" className={classes} />
  );
}
