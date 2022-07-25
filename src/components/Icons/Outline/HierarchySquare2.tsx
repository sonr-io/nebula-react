
import HierarchySquare2 from "../../../assets/outline/HierarchySquare2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HierarchySquare2Icon({ className, dataTestid = "HierarchySquare2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <HierarchySquare2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
