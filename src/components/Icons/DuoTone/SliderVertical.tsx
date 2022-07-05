
import SliderVertical from "../../../assets/duotone/SliderVertical.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function SliderVerticalIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SliderVertical data-testid="SliderVerticalIcon" className={classes} />
  );
}
