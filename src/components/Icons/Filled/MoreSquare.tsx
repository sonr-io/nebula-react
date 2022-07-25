
import MoreSquare from "../../../assets/filled/MoreSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MoreSquareIcon({ className, dataTestid = "MoreSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MoreSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
