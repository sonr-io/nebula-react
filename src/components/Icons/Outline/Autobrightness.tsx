
import Autobrightness from "../../../assets/outline/Autobrightness.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AutobrightnessIcon({ className, dataTestid = "AutobrightnessIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Autobrightness data-testid={dataTestid} className={classes} {...rest} />
  );
}
