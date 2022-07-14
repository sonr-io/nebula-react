
import HierarchySquare2 from "../../../assets/filled/HierarchySquare2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HierarchySquare2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={HierarchySquare2} data-testid="HierarchySquare2Icon" className={classes} />
  );
}
