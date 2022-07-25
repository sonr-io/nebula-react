
import CloudSnow from "../../../assets/filled/CloudSnow.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CloudSnowIcon({ className, dataTestid = "CloudSnowIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CloudSnow data-testid={dataTestid} className={classes} {...rest} />
  );
}
