
import FilterAdd from "../../../assets/filled/FilterAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function FilterAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <FilterAdd data-testid="FilterAddIcon" className={classes} />
  );
}
