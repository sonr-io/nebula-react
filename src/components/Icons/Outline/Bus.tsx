
import Bus from "../../../assets/outline/Bus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BusIcon({ className, dataTestid = "BusIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Bus data-testid={dataTestid} className={classes} {...rest} />
  );
}
