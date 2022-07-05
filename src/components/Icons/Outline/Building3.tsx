
import Building3 from "../../../assets/outline/Building3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Building3Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Building3 data-testid="Building3Icon" className={classes} />
  );
}
