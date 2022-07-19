
import Book from "../../../assets/duotone/Book.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BookIcon({ className, dataTestid = "BookIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Book data-testid={dataTestid} className={classes} {...rest} />
  );
}
