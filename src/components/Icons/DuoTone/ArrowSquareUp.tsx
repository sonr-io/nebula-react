
import ArrowSquareUp from "../../../assets/duotone/ArrowSquareUp.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowSquareUpIcon({ className, dataTestid = "ArrowSquareUpIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ArrowSquareUp data-testid={dataTestid} className={classes} {...rest} />
  );
}
