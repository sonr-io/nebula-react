
import HierarchySquare3 from "../../../assets/duotone/HierarchySquare3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HierarchySquare3Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={HierarchySquare3} data-testid="HierarchySquare3Icon" className={classes} />
  );
}
