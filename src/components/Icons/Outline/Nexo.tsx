
import Nexo from "../../../assets/outline/Nexo.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function NexoIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Nexo data-testid="NexoIcon" className={classes} />
  );
}
