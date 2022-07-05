
import Sort from "../../../assets/filled/Sort.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function SortIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Sort data-testid="SortIcon" className={classes} />
  );
}
