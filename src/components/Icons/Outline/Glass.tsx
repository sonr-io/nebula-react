
import Glass from "../../../assets/outline/Glass.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GlassIcon({ className, dataTestid = "GlassIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Glass data-testid={dataTestid} className={classes} {...rest} />
  );
}
