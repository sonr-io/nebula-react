
import Airpods from "../../../assets/duotone/Airpods.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AirpodsIcon({ className, dataTestid = "AirpodsIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Airpods data-testid={dataTestid} className={classes} {...rest} />
  );
}
