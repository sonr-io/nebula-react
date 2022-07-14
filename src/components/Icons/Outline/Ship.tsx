
import Ship from "../../../assets/outline/Ship.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ShipIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Ship} data-testid="ShipIcon" className={classes} />
  );
}
