
import ToggleOn from "../../../assets/outline/ToggleOn.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ToggleOnIcon({ className, dataTestid = "ToggleOnIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ToggleOn data-testid={dataTestid} className={classes} {...rest} />
  );
}
