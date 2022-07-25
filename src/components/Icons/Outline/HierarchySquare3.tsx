
import HierarchySquare3 from "../../../assets/outline/HierarchySquare3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HierarchySquare3Icon({ className, dataTestid = "HierarchySquare3Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <HierarchySquare3 data-testid={dataTestid} className={classes} {...rest} />
  );
}
