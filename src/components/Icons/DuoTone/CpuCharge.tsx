
import CpuCharge from "../../../assets/duotone/CpuCharge.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CpuChargeIcon({ className, dataTestid = "CpuChargeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CpuCharge data-testid={dataTestid} className={classes} {...rest} />
  );
}
