
import OmegaCircle from "../../../assets/outline/OmegaCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function OmegaCircleIcon({ className, dataTestid = "OmegaCircleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <OmegaCircle data-testid={dataTestid} className={classes} {...rest} />
  );
}
