
import HierarchySquare2 from "../../../assets/duotone/HierarchySquare2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HierarchySquare2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <HierarchySquare2 data-testid="HierarchySquare2Icon" className={classes} />
  );
}
