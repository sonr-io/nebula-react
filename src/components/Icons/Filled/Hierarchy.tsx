
import Hierarchy from "../../../assets/filled/Hierarchy.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HierarchyIcon({ className, dataTestid = "HierarchyIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Hierarchy data-testid={dataTestid} className={classes} {...rest} />
  );
}
