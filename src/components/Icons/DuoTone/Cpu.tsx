
import Cpu from "../../../assets/duotone/Cpu.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CpuIcon({ className, dataTestid = "CpuIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Cpu data-testid={dataTestid} className={classes} {...rest} />
  );
}
