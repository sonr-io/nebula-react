
import SliderVertical from "../../../assets/outline/SliderVertical.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SliderVerticalIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SliderVertical data-testid="SliderVerticalIcon" className={classes} />
  );
}
