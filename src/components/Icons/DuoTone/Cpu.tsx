
import Cpu from "../../../assets/duotone/Cpu.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CpuIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Cpu data-testid="CpuIcon" className={classes} />
  );
}
