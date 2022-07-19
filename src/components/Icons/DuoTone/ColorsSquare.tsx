
import ColorsSquare from "../../../assets/duotone/ColorsSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ColorsSquareIcon({ className, dataTestid = "ColorsSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ColorsSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
