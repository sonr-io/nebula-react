
import TruckFast from "../../../assets/duotone/TruckFast.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TruckFastIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <TruckFast data-testid="TruckFastIcon" className={classes} />
  );
}
