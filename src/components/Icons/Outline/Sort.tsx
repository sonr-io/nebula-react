
import Sort from "../../../assets/outline/Sort.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SortIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Sort data-testid="SortIcon" className={classes} />
  );
}
