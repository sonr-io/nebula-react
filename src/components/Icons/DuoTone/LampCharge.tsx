
import LampCharge from "../../../assets/duotone/LampCharge.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LampChargeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <LampCharge data-testid="LampChargeIcon" className={classes} />
  );
}