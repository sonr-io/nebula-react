
import HierarchySquare2 from "../../../assets/outline/HierarchySquare2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function HierarchySquare2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <HierarchySquare2 data-testid="HierarchySquare2Icon" className={classes} />
  );
}
