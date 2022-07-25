
import SquareEmpty from "../../../assets/duotone/SquareEmpty.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SquareEmptyIcon({ className, dataTestid = "SquareEmptyIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <SquareEmpty data-testid={dataTestid} className={classes} {...rest} />
  );
}
