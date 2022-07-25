
import SliderHorizontal from "../../../assets/outline/SliderHorizontal.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SliderHorizontalIcon({ className, dataTestid = "SliderHorizontalIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <SliderHorizontal data-testid={dataTestid} className={classes} {...rest} />
  );
}
