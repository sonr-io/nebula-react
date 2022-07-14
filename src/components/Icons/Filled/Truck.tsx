
import Truck from "../../../assets/filled/Truck.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TruckIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Truck data-testid="TruckIcon" className={classes} />
  );
}