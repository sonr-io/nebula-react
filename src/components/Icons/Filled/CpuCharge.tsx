
import CpuCharge from "../../../assets/filled/CpuCharge.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CpuChargeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={CpuCharge} data-testid="CpuChargeIcon" className={classes} />
  );
}
