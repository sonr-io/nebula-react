
import BookSaved from "../../../assets/filled/BookSaved.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BookSavedIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={BookSaved} data-testid="BookSavedIcon" className={classes} />
  );
}
