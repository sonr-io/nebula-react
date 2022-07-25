
import SliderVertical from "../../../assets/duotone/SliderVertical.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SliderVerticalIcon({ className, dataTestid = "SliderVerticalIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <SliderVertical data-testid={dataTestid} className={classes} {...rest} />
  );
}
