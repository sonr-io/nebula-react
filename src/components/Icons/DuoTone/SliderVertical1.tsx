
import SliderVertical1 from "../../../assets/duotone/SliderVertical1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function SliderVertical1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SliderVertical1 data-testid="SliderVertical1Icon" className={classes} />
  );
}
