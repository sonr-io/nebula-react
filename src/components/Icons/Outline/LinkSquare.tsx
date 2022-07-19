
import LinkSquare from "../../../assets/outline/LinkSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LinkSquareIcon({ className, dataTestid = "LinkSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <LinkSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
