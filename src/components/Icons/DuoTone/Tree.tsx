
import Tree from "../../../assets/duotone/Tree.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TreeIcon({ className, dataTestid = "TreeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Tree data-testid={dataTestid} className={classes} {...rest} />
  );
}
