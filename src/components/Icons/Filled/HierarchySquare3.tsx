
import HierarchySquare3 from "../../../assets/filled/HierarchySquare3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HierarchySquare3Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <HierarchySquare3 data-testid="HierarchySquare3Icon" className={classes} />
  );
}
