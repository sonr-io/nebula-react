
import Crop from "../../../assets/duotone/Crop.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CropIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Crop} data-testid="CropIcon" className={classes} />
  );
}
