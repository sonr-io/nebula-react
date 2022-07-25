
import HierarchySquare from "../../../assets/outline/HierarchySquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HierarchySquareIcon({ className, dataTestid = "HierarchySquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <HierarchySquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
