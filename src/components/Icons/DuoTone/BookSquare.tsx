
import BookSquare from "../../../assets/duotone/BookSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BookSquareIcon({ className, dataTestid = "BookSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <BookSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
