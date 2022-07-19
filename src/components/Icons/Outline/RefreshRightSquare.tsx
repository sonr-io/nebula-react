
import RefreshRightSquare from "../../../assets/outline/RefreshRightSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RefreshRightSquareIcon({ className, dataTestid = "RefreshRightSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <RefreshRightSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
