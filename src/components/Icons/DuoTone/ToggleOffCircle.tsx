
import ToggleOffCircle from "../../../assets/duotone/ToggleOffCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ToggleOffCircleIcon({ className, dataTestid = "ToggleOffCircleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ToggleOffCircle data-testid={dataTestid} className={classes} {...rest} />
  );
}
