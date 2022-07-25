
import ArrowSquareLeft from "../../../assets/duotone/ArrowSquareLeft.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowSquareLeftIcon({ className, dataTestid = "ArrowSquareLeftIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ArrowSquareLeft data-testid={dataTestid} className={classes} {...rest} />
  );
}
