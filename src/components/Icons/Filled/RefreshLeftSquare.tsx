
import RefreshLeftSquare from "../../../assets/filled/RefreshLeftSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RefreshLeftSquareIcon({ className, dataTestid = "RefreshLeftSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <RefreshLeftSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
