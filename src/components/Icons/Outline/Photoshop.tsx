
import Photoshop from "../../../assets/outline/Photoshop.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PhotoshopIcon({ className, dataTestid = "PhotoshopIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Photoshop data-testid={dataTestid} className={classes} {...rest} />
  );
}
