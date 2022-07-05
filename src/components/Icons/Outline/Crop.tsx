
import Crop from "../../../assets/outline/Crop.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CropIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Crop data-testid="CropIcon" className={classes} />
  );
}
