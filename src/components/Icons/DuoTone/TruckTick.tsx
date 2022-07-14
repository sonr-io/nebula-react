
import TruckTick from "../../../assets/duotone/TruckTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TruckTickIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={TruckTick} data-testid="TruckTickIcon" className={classes} />
  );
}
