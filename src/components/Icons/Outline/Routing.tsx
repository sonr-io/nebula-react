
import Routing from "../../../assets/outline/Routing.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function RoutingIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Routing data-testid="RoutingIcon" className={classes} />
  );
}
