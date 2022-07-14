
import ShieldCross from "../../../assets/duotone/ShieldCross.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ShieldCrossIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ShieldCross} data-testid="ShieldCrossIcon" className={classes} />
  );
}
