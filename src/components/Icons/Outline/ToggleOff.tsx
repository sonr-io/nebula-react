
import ToggleOff from "../../../assets/outline/ToggleOff.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ToggleOffIcon({ className, dataTestid = "ToggleOffIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ToggleOff data-testid={dataTestid} className={classes} {...rest} />
  );
}
