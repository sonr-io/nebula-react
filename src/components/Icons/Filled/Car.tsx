
import Car from "../../../assets/filled/Car.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CarIcon({ className, dataTestid = "CarIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Car data-testid={dataTestid} className={classes} {...rest} />
  );
}
