
import Routing from "../../../assets/duotone/Routing.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RoutingIcon({ className, dataTestid = "RoutingIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Routing data-testid={dataTestid} className={classes} {...rest} />
  );
}
