
import Hierarchy from "../../../assets/duotone/Hierarchy.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HierarchyIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Hierarchy data-testid="HierarchyIcon" className={classes} />
  );
}
