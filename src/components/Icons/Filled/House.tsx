
import House from "../../../assets/filled/House.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HouseIcon({ className, dataTestid = "HouseIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <House data-testid={dataTestid} className={classes} {...rest} />
  );
}
