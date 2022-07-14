
import Book from "../../../assets/duotone/Book.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BookIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Book data-testid="BookIcon" className={classes} />
  );
}
