
import FilterTick from "../../../assets/filled/FilterTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function FilterTickIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <FilterTick data-testid="FilterTickIcon" className={classes} />
  );
}
