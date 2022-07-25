
import Slider from "../../../assets/duotone/Slider.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SliderIcon({ className, dataTestid = "SliderIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Slider data-testid={dataTestid} className={classes} {...rest} />
  );
}
