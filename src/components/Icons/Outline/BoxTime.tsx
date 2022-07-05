
import BoxTime from "../../../assets/outline/BoxTime.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function BoxTimeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BoxTime data-testid="BoxTimeIcon" className={classes} />
  );
}
