
import BoxTime from "../../../assets/outline/BoxTime.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BoxTimeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={BoxTime} data-testid="BoxTimeIcon" className={classes} />
  );
}
