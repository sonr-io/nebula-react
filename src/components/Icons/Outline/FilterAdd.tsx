
import FilterAdd from "../../../assets/outline/FilterAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FilterAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <FilterAdd data-testid="FilterAddIcon" className={classes} />
  );
}
