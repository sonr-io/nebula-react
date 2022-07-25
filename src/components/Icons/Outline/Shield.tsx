
import Shield from "../../../assets/outline/Shield.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ShieldIcon({ className, dataTestid = "ShieldIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Shield data-testid={dataTestid} className={classes} {...rest} />
  );
}
