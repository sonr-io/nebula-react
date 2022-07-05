
import Tree from "../../../assets/outline/Tree.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function TreeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Tree data-testid="TreeIcon" className={classes} />
  );
}
