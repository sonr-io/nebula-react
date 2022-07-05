
import Cake from "../../../assets/outline/Cake.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CakeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Cake data-testid="CakeIcon" className={classes} />
  );
}
