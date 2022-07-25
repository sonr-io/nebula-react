
import PathSquare from "../../../assets/filled/PathSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PathSquareIcon({ className, dataTestid = "PathSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <PathSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
