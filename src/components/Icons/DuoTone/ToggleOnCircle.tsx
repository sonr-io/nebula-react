
import ToggleOnCircle from "../../../assets/duotone/ToggleOnCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ToggleOnCircleIcon({ className, dataTestid = "ToggleOnCircleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ToggleOnCircle data-testid={dataTestid} className={classes} {...rest} />
  );
}
