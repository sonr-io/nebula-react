
import Slider from "../../../assets/outline/Slider.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SliderIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Slider data-testid="SliderIcon" className={classes} />
  );
}
