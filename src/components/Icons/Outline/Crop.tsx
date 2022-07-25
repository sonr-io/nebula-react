
import Crop from "../../../assets/outline/Crop.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CropIcon({ className, dataTestid = "CropIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Crop data-testid={dataTestid} className={classes} {...rest} />
  );
}
