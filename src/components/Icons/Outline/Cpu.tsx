
import Cpu from "../../../assets/outline/Cpu.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CpuIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Cpu} data-testid="CpuIcon" className={classes} />
  );
}
