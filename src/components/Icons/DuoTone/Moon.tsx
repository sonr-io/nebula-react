
import Moon from "../../../assets/duotone/Moon.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MoonIcon({ className, dataTestid = "MoonIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Moon data-testid={dataTestid} className={classes} {...rest} />
  );
}
