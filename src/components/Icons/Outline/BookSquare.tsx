
import BookSquare from "../../../assets/outline/BookSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function BookSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BookSquare data-testid="BookSquareIcon" className={classes} />
  );
}
