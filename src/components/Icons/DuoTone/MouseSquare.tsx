
import MouseSquare from "../../../assets/duotone/MouseSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MouseSquareIcon({ className, dataTestid = "MouseSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MouseSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
