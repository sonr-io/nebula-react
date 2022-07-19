
import Wind from "../../../assets/duotone/Wind.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function WindIcon({ className, dataTestid = "WindIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Wind data-testid={dataTestid} className={classes} {...rest} />
  );
}
