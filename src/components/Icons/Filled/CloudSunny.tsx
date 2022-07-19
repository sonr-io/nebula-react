
import CloudSunny from "../../../assets/filled/CloudSunny.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CloudSunnyIcon({ className, dataTestid = "CloudSunnyIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CloudSunny data-testid={dataTestid} className={classes} {...rest} />
  );
}
