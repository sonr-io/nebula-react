
import Sun from "../../../assets/outline/Sun.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SunIcon({ className, dataTestid = "SunIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Sun data-testid={dataTestid} className={classes} {...rest} />
  );
}
