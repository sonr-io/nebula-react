
import TickSquare from "../../../assets/filled/TickSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TickSquareIcon({ className, dataTestid = "TickSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <TickSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
