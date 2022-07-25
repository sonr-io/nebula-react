
import Airplane from "../../../assets/outline/Airplane.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AirplaneIcon({ className, dataTestid = "AirplaneIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Airplane data-testid={dataTestid} className={classes} {...rest} />
  );
}
