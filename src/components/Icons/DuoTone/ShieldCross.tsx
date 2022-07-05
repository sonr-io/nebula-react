
import ShieldCross from "../../../assets/duotone/ShieldCross.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ShieldCrossIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ShieldCross data-testid="ShieldCrossIcon" className={classes} />
  );
}
