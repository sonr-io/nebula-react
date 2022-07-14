
import BookSquare from "../../../assets/filled/BookSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BookSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BookSquare data-testid="BookSquareIcon" className={classes} />
  );
}
