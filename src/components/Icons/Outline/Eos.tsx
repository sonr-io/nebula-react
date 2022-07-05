
import Eos from "../../../assets/outline/Eos.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function EosIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Eos data-testid="EosIcon" className={classes} />
  );
}
