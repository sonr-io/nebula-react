
import Forbidden from "../../../assets/outline/Forbidden.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ForbiddenIcon({ className, dataTestid = "ForbiddenIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Forbidden data-testid={dataTestid} className={classes} {...rest} />
  );
}
