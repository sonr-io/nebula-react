
import Ship from "../../../assets/filled/Ship.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ShipIcon({ className, dataTestid = "ShipIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Ship data-testid={dataTestid} className={classes} {...rest} />
  );
}
