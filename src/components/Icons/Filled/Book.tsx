
import Book from "../../../assets/filled/Book.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BookIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Book} data-testid="BookIcon" className={classes} />
  );
}
