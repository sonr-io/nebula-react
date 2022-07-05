
import BookSaved from "../../../assets/duotone/BookSaved.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function BookSavedIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BookSaved data-testid="BookSavedIcon" className={classes} />
  );
}
