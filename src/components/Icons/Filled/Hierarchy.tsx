
import Hierarchy from "../../../assets/filled/Hierarchy.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HierarchyIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Hierarchy} data-testid="HierarchyIcon" className={classes} />
  );
}
