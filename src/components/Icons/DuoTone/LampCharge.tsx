
import LampCharge from "../../../assets/duotone/LampCharge.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LampChargeIcon({ className, dataTestid = "LampChargeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <LampCharge data-testid={dataTestid} className={classes} {...rest} />
  );
}
