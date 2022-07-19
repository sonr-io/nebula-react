
import ArrowSquare from "../../../assets/duotone/ArrowSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowSquareIcon({ className, dataTestid = "ArrowSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ArrowSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
