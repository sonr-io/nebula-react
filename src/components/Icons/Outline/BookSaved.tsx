
import BookSaved from "../../../assets/outline/BookSaved.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BookSavedIcon({ className, dataTestid = "BookSavedIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <BookSaved data-testid={dataTestid} className={classes} {...rest} />
  );
}
