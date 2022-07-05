
import Book1 from "../../../assets/filled/Book1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Book1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Book1 data-testid="Book1Icon" className={classes} />
  );
}
