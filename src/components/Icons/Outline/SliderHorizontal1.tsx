
import SliderHorizontal1 from "../../../assets/outline/SliderHorizontal1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SliderHorizontal1Icon({ className, dataTestid = "SliderHorizontal1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <SliderHorizontal1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
