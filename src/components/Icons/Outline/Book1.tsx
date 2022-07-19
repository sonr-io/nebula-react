
import Book1 from "../../../assets/outline/Book1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Book1Icon({ className, dataTestid = "Book1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Book1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
