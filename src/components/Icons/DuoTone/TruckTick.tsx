
import TruckTick from "../../../assets/duotone/TruckTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function TruckTickIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <TruckTick data-testid="TruckTickIcon" className={classes} />
  );
}
