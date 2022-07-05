
import Car from "../../../assets/filled/Car.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CarIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Car data-testid="CarIcon" className={classes} />
  );
}
