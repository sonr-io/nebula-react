
import FilterEdit from "../../../assets/outline/FilterEdit.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function FilterEditIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <FilterEdit data-testid="FilterEditIcon" className={classes} />
  );
}
