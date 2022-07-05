
import CloseSquare from "../../../assets/outline/CloseSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CloseSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CloseSquare data-testid="CloseSquareIcon" className={classes} />
  );
}
