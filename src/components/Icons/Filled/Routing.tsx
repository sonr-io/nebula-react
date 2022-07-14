
import Routing from "../../../assets/filled/Routing.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RoutingIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Routing} data-testid="RoutingIcon" className={classes} />
  );
}
