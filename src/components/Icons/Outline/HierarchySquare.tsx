
import HierarchySquare from "../../../assets/outline/HierarchySquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HierarchySquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <HierarchySquare data-testid="HierarchySquareIcon" className={classes} />
  );
}