
import Driver from "../../../assets/filled/Driver.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DriverIcon({ className, dataTestid = "DriverIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Driver data-testid={dataTestid} className={classes} {...rest} />
  );
}
