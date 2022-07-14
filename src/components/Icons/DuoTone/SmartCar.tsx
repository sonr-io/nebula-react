
import SmartCar from "../../../assets/duotone/SmartCar.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SmartCarIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={SmartCar} data-testid="SmartCarIcon" className={classes} />
  );
}
