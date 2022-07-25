
import ArrangeSquare from "../../../assets/filled/ArrangeSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrangeSquareIcon({ className, dataTestid = "ArrangeSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ArrangeSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
