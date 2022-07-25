
import Driving from "../../../assets/filled/Driving.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DrivingIcon({ className, dataTestid = "DrivingIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Driving data-testid={dataTestid} className={classes} {...rest} />
  );
}
