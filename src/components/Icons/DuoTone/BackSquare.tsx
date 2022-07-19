
import BackSquare from "../../../assets/duotone/BackSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BackSquareIcon({ className, dataTestid = "BackSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <BackSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
