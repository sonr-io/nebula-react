
import Celsius from "../../../assets/duotone/Celsius.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CelsiusIcon({ className, dataTestid = "CelsiusIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Celsius data-testid={dataTestid} className={classes} {...rest} />
  );
}
