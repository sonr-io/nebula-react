
import Ship from "../../../assets/duotone/Ship.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ShipIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Ship data-testid="ShipIcon" className={classes} />
  );
}
