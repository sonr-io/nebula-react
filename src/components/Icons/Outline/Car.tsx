
import Car from "../../../assets/outline/Car.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CarIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Car data-testid="CarIcon" className={classes} />
  );
}
