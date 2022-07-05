
import Filter from "../../../assets/outline/Filter.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function FilterIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Filter data-testid="FilterIcon" className={classes} />
  );
}
