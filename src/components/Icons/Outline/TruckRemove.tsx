
import TruckRemove from "../../../assets/outline/TruckRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TruckRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <TruckRemove data-testid="TruckRemoveIcon" className={classes} />
  );
}
