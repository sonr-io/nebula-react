
import FilterSquare from "../../../assets/outline/FilterSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function FilterSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <FilterSquare data-testid="FilterSquareIcon" className={classes} />
  );
}
