
import Slider from "../../../assets/duotone/Slider.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SliderIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Slider} data-testid="SliderIcon" className={classes} />
  );
}
