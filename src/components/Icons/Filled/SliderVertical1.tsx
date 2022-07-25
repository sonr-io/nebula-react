
import SliderVertical1 from "../../../assets/filled/SliderVertical1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SliderVertical1Icon({ className, dataTestid = "SliderVertical1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <SliderVertical1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
