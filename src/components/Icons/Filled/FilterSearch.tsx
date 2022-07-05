
import FilterSearch from "../../../assets/filled/FilterSearch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function FilterSearchIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <FilterSearch data-testid="FilterSearchIcon" className={classes} />
  );
}
