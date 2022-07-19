
import FilterSquare from "../../../assets/outline/FilterSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FilterSquareIcon({ className, dataTestid = "FilterSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <FilterSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
